import {ApiProperty} from "@nestjs/swagger";

export class AddMoneyDto {
    @ApiProperty({example: 'id', description: "id of user"})
    readonly id: number;
    @ApiProperty({example: '200', description: "money"})
    readonly money: number;
}