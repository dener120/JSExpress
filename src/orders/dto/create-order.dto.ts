import {ApiProperty} from "@nestjs/swagger";

export class CreateOrderDto {
    @ApiProperty({example: 'clearance of goods', description: "product readiness status"})
    readonly status: string;
    @ApiProperty({example: '1000', description: "price of all goods"})
    readonly totalPrice: number;
    @ApiProperty({example: '5', description: "number of products"})
    readonly totalQuantity: number;
    @ApiProperty({example: '5', description: "id of user"})
    readonly userId: number;
}