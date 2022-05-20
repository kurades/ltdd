import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { Dish } from "./dish.model";

@Injectable()
export class DishService{
    constructor(
        @InjectModel('Dish') private readonly dishModel : Model<Dish>
    ){}
    async insertDish(
        name : string,
        description : string,
        image : string,
        price : number,
        quantity : number,
        restaurant : string,
    ){
        const newDish = new this.dishModel({name,description,image,price,quantity,restaurant});
        const result = await newDish.save();
        return result.id as string;
    }

    async getDishes(){
        return await this.dishModel.find().exec()
    }

    async getDishById(id : string){
        const result = await this.dishModel.findById(id).populate({path : "restaurant"})
        return result
    }
}