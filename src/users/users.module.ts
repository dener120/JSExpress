import { Module } from '@nestjs/common';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';
import {SequelizeModule} from "@nestjs/sequelize";
import {User} from "./user.model";
import {Role} from "../roles/roles.model";
import {UserRoles} from "../roles/user-roles.models";
import {RolesModule} from "../roles/roles.module";
import {Product} from "../products/products.model";
import {ProductsCreatedByUser} from "../products/created-by-user.model";
import {Order} from "../orders/orders.model";

@Module({
  controllers: [UsersController],
  providers: [UsersService],
  imports: [
      SequelizeModule.forFeature([User, Role, UserRoles, Product, ProductsCreatedByUser, Order]),
      RolesModule
  ],
    exports: [
        UsersService
    ]
})
export class UsersModule {}
