import {Body, Injectable} from '@nestjs/common';
import {CreateProductDto} from "./dto/create-product.dto";
import {InjectModel} from "@nestjs/sequelize";
import {Product} from "./products.model";
import {FilesService} from "../files/files.service";

@Injectable()
export class ProductsService {

    constructor(@InjectModel(Product) private productRepository: typeof Product,
                private fileService: FilesService) {
    }

    async create(dto: CreateProductDto, img: any) {
        const fileName = await this.fileService.createFile(img)
        const product = await this.productRepository.create({...dto, img: fileName})
        return product
    }

    async getAllProducts() {
        const products = await this.productRepository.findAll({include: {all: true}})
        return products
    }

    async getProductById(id: number) {
        const product = await this.productRepository.findOne({where: {id}})
        return product
    }
}
