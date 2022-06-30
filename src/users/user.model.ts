import {BelongsToMany, Column, DataType, HasMany, Model, Table} from "sequelize-typescript";
import {ApiProperty} from "@nestjs/swagger";
import {Role} from "../roles/roles.model";
import {UserRoles} from "../roles/user-roles.models";
import {Product} from "../products/products.model";
import {ProductsCreatedByUser} from "../products/created-by-user.model";
import {Order} from "../orders/orders.model";

interface UserCreationAttrs {
    email: string,
    password: string
}

@Table({tableName: 'users'})
export class User extends Model<User, UserCreationAttrs> {
    @ApiProperty({example: '1', description: "id"})
    @Column({type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true})
    id: number;

    @ApiProperty({example: 'test@mail.com', description: "unique email"})
    @Column({type: DataType.STRING, unique: true, allowNull: false})
    email: string;

    @ApiProperty({example: 'qwerty1234', description: "password"})
    @Column({type: DataType.STRING, allowNull: false})
    password: string;

    @ApiProperty({example: 'Nikita', description: "name"})
    @Column({type: DataType.STRING, allowNull: false})
    name: string;

    @ApiProperty({example: 'Ivashchenko', description: "surname"})
    @Column({type: DataType.STRING, allowNull: false})
    surname: string;

    @ApiProperty({example: 'Alekseevich', description: "patronymic"})
    @Column({type: DataType.STRING})
    patronymic: string;

    @ApiProperty({example: '0', description: "money of user"})
    @Column({type: DataType.INTEGER, allowNull: false, defaultValue: 0})
    currency: number;

    @BelongsToMany(() => Role, () => UserRoles)
    roles: Role[]

    @BelongsToMany(() => Product, () => ProductsCreatedByUser)
    products: Product[]

    @HasMany(() => Order)
    orders: Order[]
}