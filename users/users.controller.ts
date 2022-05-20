import { Controller,Post,Get,Delete,Body,Param } from '@nestjs/common';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
    constructor(private readonly userService:UsersService){}
   
    @Post()
    async insertUser(
        @Body('name') name:string,
        @Body('password') password: string,
        @Body('email') email: string,
        @Body('phone')phone:string,
        @Body('location') location : string[],
        @Body('role')role:string
    ){
        const generatedId = await this.userService.insertUser(
            name,
            password,
            email,
            phone,
            location,
            role
        );
        return{id : generatedId};
    }
    @Get()
        getUsers(){
        return this.userService.getUsers();
  }

    @Get(":id")
        getUserById(@Param() param : any){
        return this.userService.getUserById(param.id);
  }

}
