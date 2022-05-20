import mongoose from "mongoose";



export const UserSchema = new mongoose.Schema({
    name : {type : String, required : true},
    password : {type : String, required : true},
    email : {type : String, required : true},
    phone : {type : String, required : true},
    location : {
        xAxis : {type : String, required : false},
        yAxis : {type : String, required : false},
    },
    role : {type : String, required : true}
})

export interface User {
    name : string;
    password : string;
    email : string;
    phone : string;
    location : {
        xAxis : string;
        yAxis : string;
    },
    role : string;

}