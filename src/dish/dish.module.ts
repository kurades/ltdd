import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";
import { DishController } from "./dish.controller";
import { DishSchema } from "./dish.model";
import { DishService } from "./dish.service";
@Module({
    imports: [MongooseModule.forFeature([{name: "Dish",schema: DishSchema}])],
    controllers: [DishController],
    providers: [DishService],
    exports : [DishModule]
})
export class DishModule{}