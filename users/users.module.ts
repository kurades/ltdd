import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { MongooseModule } from '@nestjs/mongoose';
import { UserSchema } from './users.model';
import { UsersController } from './users.controller';

@Module({
  imports: [MongooseModule.forFeature([{name: "Users",schema: UserSchema}])],
  providers: [UsersService],
  exports: [UsersService],
  controllers: [UsersController]
})
export class UsersModule {}
