import {ApiProperty} from "@nestjs/swagger";

export class AddRoleDto {
    @ApiProperty({example: 'ADMIN', description: "name of role"})
    readonly value: string;
    @ApiProperty({example: '1'})
    readonly userId: number;
}