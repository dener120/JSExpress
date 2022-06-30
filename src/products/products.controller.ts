import {Body, Controller, Get, Post, UploadedFile, UseInterceptors} from '@nestjs/common';
import {CreateProductDto} from "./dto/create-product.dto";
import {ProductsService} from "./products.service";
import {FileInterceptor} from "@nestjs/platform-express";
import {ApiOperation, ApiResponse, ApiTags} from "@nestjs/swagger";
import {User} from "../users/user.model";
import {Product} from "./products.model";

@ApiTags('Products of shop')
@Controller('products')
export class ProductsController {

    constructor(private productsService: ProductsService) {}

    @ApiOperation({summary: 'Create product by user'})
    @ApiResponse({status: 200, type: Product})
    @Post()
    @UseInterceptors(FileInterceptor('img'))
    createProduct(@Body() dto: CreateProductDto,
                  @UploadedFile() img) {
        return this.productsService.create(dto, img)
    }

    @ApiOperation({summary: 'Get all products'})
    @ApiResponse({status: 200, type: [Product]})
    @Get()
    getAll() {
        return this.productsService.getAllProducts()
    }

    @ApiOperation({summary: 'Get one product'})
    @ApiResponse({status: 200, type: Product})
    @Get('/product')
    getOneById(@Body() body) {
        return this.productsService.getProductById(body.id)
    }
}
