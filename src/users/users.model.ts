import mongoose from 'mongoose';

export const UserSchema = new mongoose.Schema({
    name:{type:String, required:true},
    email:{type:String,required:true},
    password:{type:String,required:true},
    avatar:{type:String,required:true},
    phone:{type:String,required:true},
    xAxis:{type:String,required:false},
    yAxis:{type:String,required:false},
    role:{type:String,required:true}

})
export interface User {
    _id : string;
    name : string;
    email : string;
    password : string;
    avatar : string;
    phone:string;
    xAxis:string;
    yAxis:string;
    role:string;
}
