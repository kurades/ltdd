import { Injectable } from '@nestjs/common';
import { InjectModel } from "@nestjs/mongoose";
import { User } from './users.model';
import { Model } from 'mongoose';
import * as bcrypt from 'bcrypt';


@Injectable()
export class UsersService {
    

    constructor(
        @InjectModel('Users') private  readonly userModel:Model<User>
    ){
        
    }
    async insertUser(
        name:string,
        password:string,
        email:string,
        phone:string,
        location:string[],
        role:string
    ){
        
        const salt = await bcrypt.genSalt();
        password = await bcrypt.hash(password, salt);
      
        const newDish = new this.userModel({name,password,email,phone,location,role});
        const result = await newDish.save();
        return result;
    }

    async getUsers(){
        return await this.userModel.find().exec()
    }

    async getUserById(id : string){
        const result = await this.userModel.findById(id).populate({path : "users"})
        return result
    }
    async findOne(email:string): Promise<any | undefined> {
        return  this.userModel.findOne(user => user.email === email);
      }
}
