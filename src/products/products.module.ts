import { Module } from '@nestjs/common';
import { ProductsController } from './products.controller';
import { ProductsService } from './products.service';
import {SequelizeModule} from "@nestjs/sequelize";
import {User} from "../users/user.model";
import {Role} from "../roles/roles.model";
import {UserRoles} from "../roles/user-roles.models";
import {Product} from "./products.model";
import {ProductsCreatedByUser} from "./created-by-user.model";
import {RolesModule} from "../roles/roles.module";
import {FilesModule} from "../files/files.module";
import {Order} from "../orders/orders.model";
import {OrdersProducts} from "../orders/orders_products.models";

@Module({
  controllers: [ProductsController],
  providers: [ProductsService],
  imports: [
    SequelizeModule.forFeature([User, Product, Order, OrdersProducts]),
    FilesModule
  ],
  exports: [
      ProductsService
  ]
})
export class ProductsModule {}
