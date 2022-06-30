import {BelongsTo, BelongsToMany, Column, DataType, ForeignKey, Model, Table} from "sequelize-typescript";
import {ApiProperty} from "@nestjs/swagger";
import {Role} from "../roles/roles.model";
import {UserRoles} from "../roles/user-roles.models";
import {User} from "../users/user.model";
import {Product} from "../products/products.model";
import {OrdersProducts} from "./orders_products.models";

interface OrderCreationAttrs {
    name: string;
    price: number;
    quantity: number;
    userId: number;
    img: string;
}

@Table({tableName: 'orders'})
export class Order extends Model<Order, OrderCreationAttrs> {
    @ApiProperty({example: '1', description: "id"})
    @Column({type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true})
    id: number;

    @ApiProperty({example: 'clearance of goods', description: "product readiness status"})
    @Column({type: DataType.STRING, allowNull: false})
    status: string;

    @ApiProperty({example: '1000', description: "price of all goods"})
    @Column({type: DataType.INTEGER, allowNull: false})
    totalPrice: number;

    @ApiProperty({example: '5', description: "number of products"})
    @Column({type: DataType.INTEGER, allowNull: false})
    totalQuantity: number;

    @ForeignKey(() => User)
    @Column({type: DataType.INTEGER})
    userId: number

    @BelongsToMany(() => Product, () => OrdersProducts)
    products: Product[]

    @BelongsTo(() => User)
    customer: User




}