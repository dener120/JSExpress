import {ApiProperty} from "@nestjs/swagger";

export class CreateProductDto {
    @ApiProperty({example: 'lays', description: "name of product"})
    readonly name: string;
    @ApiProperty({example: '500', description: "price"})
    readonly price: number;
    @ApiProperty({example: '100', description: "quantity of goods"})
    readonly quantity: number;
    @ApiProperty({example: 'Flagship smartphone from Western manufacturers'})
    readonly description: string;
    @ApiProperty({example: 'smartphone', description: "type of goods"})
    readonly type: string;
    @ApiProperty({example: '5', description: "id of user (admin) who created a product"})
    readonly userId: number;
}