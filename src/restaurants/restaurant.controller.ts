import { Body, Controller, Get, Param, Post } from "@nestjs/common";
import { RestaurantService } from "./restaurant.service";

@Controller('restaurant')
export class RestaurantController {
  constructor(private readonly restaurantService: RestaurantService) {}

  @Post()
  async insertRestaurant(
      @Body('name') name : string,
      @Body('description') desc : string,
      @Body('image') image : string,
      @Body('dishes') dishes : string[],
  ){
      const generatedId = await this.restaurantService.insertRestaurant(
          name,
          desc,
          image,
          dishes,
      );
      return{id : generatedId};
  }

  @Get()
  getRestaurant(){
      return this.restaurantService.getRestaurants();
  }

  @Get(":id")
  getRestaurantById(@Param() param : any){
      return this.restaurantService.getRestaurantById(param.id);
  }

}