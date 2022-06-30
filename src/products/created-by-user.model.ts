import {BelongsToMany, Column, DataType, ForeignKey, Model, Table} from "sequelize-typescript";
import {User} from "../users/user.model";
import {Product} from "./products.model";



@Table({tableName: 'created-by-user', createdAt: false, updatedAt: false})
export class ProductsCreatedByUser extends Model<ProductsCreatedByUser> {

    @Column({type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true})
    id: number;

    @ForeignKey(() => User)
    @Column({type: DataType.INTEGER})
    userId: number;

    @ForeignKey(() => Product)
    @Column({type: DataType.INTEGER})
    productId: number;


}