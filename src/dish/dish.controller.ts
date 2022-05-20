import { Body, Controller, Get, Param, Post } from "@nestjs/common";
import { DishService } from "./dish.service";

@Controller('dish')
export class DishController{
    constructor(private readonly dishService : DishService){}

    @Post()
    async insertDish(
        @Body('name') name : string,
        @Body('description') desc : string,
        @Body('image') image : string,
        @Body('price') price : number,
        @Body('quantity') quantity : number,
        @Body('restaurant') restaurant : string,
    ){
        const generatedId = await this.dishService.insertDish(name,desc,image,price,quantity,restaurant)
        return {id : generatedId}
    }

    @Get()
    async getDishes(){
        return await this.dishService.getDishes()
    }

    @Get(":id")
    async getDishById(@Param() param : any){
        return await this.dishService.getDishById(param.id)
    }
}