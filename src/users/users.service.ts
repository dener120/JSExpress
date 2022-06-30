import {HttpException, HttpStatus, Injectable} from '@nestjs/common';
import {InjectModel} from "@nestjs/sequelize";
import {User} from "./user.model";
import {CreateUserDto} from "./dto/create-user.dto";
import {RolesService} from "../roles/roles.service";
import {AddMoneyDto} from "./dto/add-money.dto";
import {AddRoleDto} from './dto/add-role.dto'

@Injectable()
export class UsersService {

    constructor(@InjectModel(User) private userRepository: typeof User,
                private roleService: RolesService) {
    }

    async createUser(dto: CreateUserDto) {
        const user = await this.userRepository.create(dto)
        const role = await this.roleService.getRoleByValue('USER')
        await user.$set('roles', [role.id])
        user.roles = [role]
        return user
    }

    async getAllUsers() {
        const users = await this.userRepository.findAll({include: {all: true}})
        return users
    }

    async getOneUser(id: number) {
        const user = await this.userRepository.findOne({where: {id}, include: {all: true}})
        return user
    }

    async getUserByEmail(email: string) {
        const user = await this.userRepository.findOne({where: {email}, include: {all: true}})
        return user
    }

    async addMoney(dto: AddMoneyDto) {
        const id = dto.id
        const money = dto.money
        const user = await this.userRepository.findOne({where: {id}})
        const newCurrency = dto.money + user.currency
        const updatedUser = await user.update({currency: newCurrency}, {where: {id}})
        return updatedUser
    }

    async addRole(dto: AddRoleDto) {
        const user = await this.userRepository.findByPk(dto.userId)
        const role = await this.roleService.getRoleByValue(dto.value)
        if (role && user) {
            await user.$add('role', role.id);
            return dto
        }
        throw new HttpException('Данные некорректны', HttpStatus.BAD_REQUEST)

    }
}
