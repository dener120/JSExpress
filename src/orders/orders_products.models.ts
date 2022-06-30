import {BelongsToMany, Column, DataType, ForeignKey, Model, Table} from "sequelize-typescript";
import {User} from "../users/user.model";
import {Order} from "./orders.model";
import {Product} from "../products/products.model";
import {ApiProperty} from "@nestjs/swagger";



@Table({tableName: 'orders-products', createdAt: false, updatedAt: false})
export class OrdersProducts extends Model<OrdersProducts> {

    @ApiProperty({example: '1', description: "id of row of this table"})
    @Column({type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true})
    id: number;

    @ApiProperty({example: '3', description: "id of order"})
    @ForeignKey(() => Order)
    @Column({type: DataType.INTEGER})
    orderId: number;

    @ApiProperty({example: '2', description: "id of product"})
    @ForeignKey(() => Product)
    @Column({type: DataType.INTEGER})
    productId: number;

    @ApiProperty({example: '3', description: "number of ordered products"})
    @Column({type: DataType.INTEGER})
    quantity: number;


}