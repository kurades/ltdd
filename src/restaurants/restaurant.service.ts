import { Injectable } from '@nestjs/common';
import { Restaurant } from './restaurant.model';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

@Injectable()
export class RestaurantService {

    constructor(
        @InjectModel('Restaurant') private readonly restaurantModel: Model<Restaurant>
    ) {}
    async insertRestaurant(name : string,description : string, image : string, dishes : string[]){
        const newRestaurant = new this.restaurantModel({name, description,rating : 0, image, dishes});
        const result = await newRestaurant.save();
        return result.id as string;
    }

    async getRestaurants(){
        return this.restaurantModel.find().exec();
    }
    async getRestaurantById(id : string){
        return this.restaurantModel.findById(id).populate('dishes').exec();
    }
}