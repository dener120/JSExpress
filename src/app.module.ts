import {Module} from "@nestjs/common";
import {SequelizeModule} from "@nestjs/sequelize";
import { UsersModule } from './users/users.module';
import {ConfigModule} from "@nestjs/config";
import {User} from "./users/user.model";
import { RolesModule } from './roles/roles.module';
import {Role} from "./roles/roles.model";
import {UserRoles} from "./roles/user-roles.models";
import { AuthModule } from './auth/auth.module';
import { ProductsModule } from './products/products.module';
import {Product} from "./products/products.model";
import {ProductsCreatedByUser} from "./products/created-by-user.model";
import { FilesModule } from './files/files.module';
import {ServeStaticModule} from "@nestjs/serve-static";
import { OrdersModule } from './orders/orders.module';
import * as path from 'path';
import {OrdersProducts} from "./orders/orders_products.models";
import {Order} from "./orders/orders.model";

@Module({
    controllers: [],
    providers: [],
    imports: [
        ConfigModule.forRoot({
            envFilePath: `.${process.env.NODE_ENV}.env`
        }),
        ServeStaticModule.forRoot({
            rootPath: path.resolve(__dirname,'static'),
        }),
        SequelizeModule.forRoot({
            dialect: 'postgres',
            host: process.env.POSTGRES_HOST,
            port: Number(process.env.POSTGRES_PORT),
            username: process.env.POSTGRES_USER,
            password: process.env.POSTGRES_PASSWORD,
            database: process.env.POSTGRES_DB,
            models: [User, Role, UserRoles, Product, ProductsCreatedByUser,
            Order, OrdersProducts],
                dialectOptions: {
                    ssl: {
                        require: true,
                        rejectUnauthorized: false // <<<<<<< YOU NEED THIS
                    }
                },
            autoLoadModels: true
        }),
        UsersModule,
        RolesModule,
        AuthModule,
        ProductsModule,
        FilesModule,
        OrdersModule,
    ]
})
export class AppModule {}