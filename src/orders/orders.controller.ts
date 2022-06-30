import {Body, Controller, Get, Post} from '@nestjs/common';
import {ApiOperation, ApiResponse, ApiTags} from "@nestjs/swagger";
import {Product} from "../products/products.model";
import {OrdersService} from "./orders.service";
import {CreateOrderDto} from "./dto/create-order.dto";
import {Order} from "./orders.model";
import {Role} from "../roles/roles.model";
import {AddRoleDto} from "../users/dto/add-role.dto";
import {AddProductInOrderDto} from "./dto/add-product-in-order.dto";

function Orders() {

}

@ApiTags('Orders')
@Controller('orders')
export class OrdersController {

    constructor(private orderService: OrdersService) {}

    @ApiOperation({summary: 'Get all orders in shop'})
    @ApiResponse({status: 200, type: [Order]})
    @Get()
    getAll() {
        return this.orderService.getAllOrders()
    }

    @ApiOperation({summary: 'Create order'})
    @ApiResponse({status: 200, type: Order})
    @Post()
    createOrder(@Body() dto: CreateOrderDto) {
        return this.orderService.createOrder(dto)
    }

    @ApiOperation({summary: 'To add role to user'})
    @ApiResponse({status: 200, type: Role})
    @Post('/add_in_order')
    addProductInOrder(@Body() dto: AddProductInOrderDto) {
        return this.orderService.addProductInOrder(dto)
    }
}
