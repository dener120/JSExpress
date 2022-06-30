import { Module } from '@nestjs/common';
import { OrdersController } from './orders.controller';
import { OrdersService } from './orders.service';
import {SequelizeModule} from "@nestjs/sequelize";
import {User} from "../users/user.model";
import {Product} from "../products/products.model";
import {Order} from "./orders.model";
import {OrdersProducts} from "./orders_products.models";

import {ProductsModule} from "../products/products.module";
import {UsersModule} from "../users/users.module";

@Module({
  controllers: [OrdersController],
  providers: [OrdersService],
  imports: [
    SequelizeModule.forFeature([Product, Order, OrdersProducts, User]),
    ProductsModule,
    UsersModule
  ]
})
export class OrdersModule {}
