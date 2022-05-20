import mongoose from "mongoose";

export const DishSchema = new mongoose.Schema({
    name :{type : String, required : true},
    description : {type : String, required : true},
    image : {type : String, required : true},
    price : {type : Number, required : true},
    quantity : {type : Number, required : true},
    restaurant : {type : mongoose.Schema.Types.ObjectId, ref: "Restaurant", required : true}
})

export interface Dish{
    _id : string;
    name : string;
    description : string;
    image : string;
    price : number;
    quantity : number;
    restaurant : string;
}