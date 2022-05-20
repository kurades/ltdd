import { Module } from '@nestjs/common';
import {MongooseModule} from "@nestjs/mongoose"
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DishModule } from './dish/dish.module';
import { RestaurantModule } from './restaurants/restaurant.module';



@Module({
  imports: [MongooseModule.forRoot("mongodb+srv://tuananh:tuananh123@cluster0.larqu.mongodb.net/UberApp"),RestaurantModule,DishModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
