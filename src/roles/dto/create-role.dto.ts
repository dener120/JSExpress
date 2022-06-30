import {ApiProperty} from "@nestjs/swagger";

export class CreateRoleDto {
    @ApiProperty({example: 'ADMIN', description: "name of role"})
    readonly value: string;
    @ApiProperty({example: 'name of role'})
    readonly description: string;
}