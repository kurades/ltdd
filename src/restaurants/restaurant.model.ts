import mongoose from 'mongoose';

export const RestaurantSchema = new mongoose.Schema({
    name: {type: String, required: true},
    description : {type: String, required: true},
    rating : {type: Number, required: false},
    image : {type: String, required: true},
    dishes : [{type : mongoose.Schema.Types.ObjectId, ref : "Dish", required: false}]
})

export interface Restaurant {
    _id : string;
    name : string;
    description : string
    rating : number;
    image : string;
    dishes : string[];
}
