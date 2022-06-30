import {ApiProperty} from "@nestjs/swagger";

export class CreateUserDto {
    @ApiProperty({example: 'test@mail.com', description: "unique email"})
    readonly email: string;
    @ApiProperty({example: 'qwerty1234', description: "password"})
    readonly password: string;
    @ApiProperty({example: 'Nikita', description: "name"})
    readonly name: string;
    @ApiProperty({example: 'Ivashchenko', description: "surname"})
    readonly surname: string;
    @ApiProperty({example: 'Alekseevich', description: "patronymic"})
    readonly patronymic: string;
}