import {Body, Controller, Get, Post} from '@nestjs/common';
import {CreateUserDto} from "./dto/create-user.dto";
import {UsersService} from "./users.service";
import {ApiOperation, ApiResponse, ApiTags} from "@nestjs/swagger";
import {User} from "./user.model";
import {AddMoneyDto} from "./dto/add-money.dto";
import {Role} from "../roles/roles.model";
import {AddRoleDto} from "./dto/add-role.dto";

@ApiTags('Users')
@Controller('users')
export class UsersController {

    constructor(private usersService: UsersService) {}

    @ApiOperation({summary: 'Get all users'})
    @ApiResponse({status: 200, type: [User]})
    @Get()
    getAll() {
        return this.usersService.getAllUsers()
    }

    @ApiOperation({summary: 'Get one user'})
    @ApiResponse({status: 200, type: User})
    @Get("/get_one")
    getOne(@Body() body) {
        return this.usersService.getOneUser(body.id)
    }

    @ApiOperation({summary: 'User creation'})
    @ApiResponse({status: 200, type: User})
    @Post()
    create(@Body() userDto: CreateUserDto) {
        return this.usersService.createUser(userDto)
    }

    @ApiOperation({summary: 'Add money to user'})
    @ApiResponse({status: 200, type: User})
    @Post("/add_money")
    addMoney(@Body() addMoneyDto: AddMoneyDto) {
        return this.usersService.addMoney(addMoneyDto)
    }

    @ApiOperation({summary: 'To add role to user'})
    @ApiResponse({status: 200, type: Role})
    @Post('/role')
    addRole(@Body() dto: AddRoleDto) {
        return this.usersService.addRole(dto)
    }
}
