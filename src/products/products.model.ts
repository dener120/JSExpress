import {BelongsToMany, Column, DataType, Model, Table} from "sequelize-typescript";
import {ApiProperty} from "@nestjs/swagger";
import {Role} from "../roles/roles.model";
import {UserRoles} from "../roles/user-roles.models";
import {User} from "../users/user.model";
import {ProductsCreatedByUser} from "./created-by-user.model";
import {OrdersProducts} from "../orders/orders_products.models";
import {Order} from "../orders/orders.model";

interface ProductCreationAttrs {
    name: string;
    price: number;
    quantity: number;
    userId: number;
    img: string;
}

@Table({tableName: 'products'})
export class Product extends Model<Product, ProductCreationAttrs> {
    @ApiProperty({example: '1', description: "id"})
    @Column({type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true})
    id: number;

    @ApiProperty({example: 'Lays', description: "name of product"})
    @Column({type: DataType.STRING, unique: true, allowNull: false})
    name: string;

    @ApiProperty({example: '100', description: "price"})
    @Column({type: DataType.INTEGER, allowNull: false})
    price: number;

    @ApiProperty({example: '20', description: "number of goods"})
    @Column({type: DataType.INTEGER, allowNull: false})
    quantity: number;

    @ApiProperty({example: '4', description: "rating"})
    @Column({type: DataType.INTEGER})
    rating: number;

    @ApiProperty({example: 'Flagship smartphone from Western manufacturers'})
    @Column({type: DataType.STRING})
    description: string;

    @ApiProperty({example: 'smartphone', description: "type of product"})
    @Column({type: DataType.STRING})
    type: string;

    @ApiProperty({example: 'sadasfdasfgsdghdfghfghfdghvcx.jpg', description: "random name of image"})
    @Column({type: DataType.STRING})
    img: string;

    @BelongsToMany(() => User, () => ProductsCreatedByUser)
    users: User[]

    @BelongsToMany(() => Order, () => OrdersProducts)
    orders: Order[]



}