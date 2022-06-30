import {HttpException, HttpStatus, Injectable} from '@nestjs/common';
import {InjectModel} from "@nestjs/sequelize";
import {Product} from "../products/products.model";
import {FilesService} from "../files/files.service";
import {Order} from "./orders.model";
import {CreateProductDto} from "../products/dto/create-product.dto";
import {CreateOrderDto} from "./dto/create-order.dto";
import {AddProductInOrderDto} from "./dto/add-product-in-order.dto";
import {ProductsService} from "../products/products.service";
import {UsersService} from "../users/users.service";

@Injectable()
export class OrdersService {

    constructor(@InjectModel(Order) private orderRepository: typeof Order,
                private productService: ProductsService,
                private userService: UsersService) {}

    async getAllOrders() {
        const products = await this.orderRepository.findAll({include: {all: true}})
        return products
    }

    async createOrder(dto: CreateOrderDto) {
        const order = await this.orderRepository.create(dto)
        return order
    }

    async addProductInOrder(dto: AddProductInOrderDto) {
        const order = await this.orderRepository.findByPk(dto.orderId)
        if(!order) {
            await this.createOrder(dto)
        }
        let product = await this.productService.getProductById(dto.productId)
        if (product) {
            const user = await this.userService.getOneUser(dto.userId)
            const productId = product.id
            const newQuantity = product.quantity - 1
            const newCurrency = user.currency - product.price
            await order.$add('product', product.id);
            console.log("Hello")
            await product.update({quantity: newQuantity}, {where: {id: productId}})
            await user.update({currency: newCurrency}, {where: {id: user.id}})
            return order
        }
        throw new HttpException('Данные некорректны', HttpStatus.BAD_REQUEST)

    }
}
