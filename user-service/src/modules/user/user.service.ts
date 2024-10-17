import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { InjectModel } from '@nestjs/sequelize';
import { UserModel } from './model';


@Injectable()
export class UserService {
  constructor(@InjectModel(UserModel) private userModel: typeof UserModel){}
  async create(createUserDto: CreateUserDto): Promise<UserModel> {
    const newUser = await this.userModel.create({
      name: createUserDto.name,
      phone: createUserDto.phone,
      image: createUserDto.image,
      email: createUserDto.email,
    })
    return newUser
  }

  async findAll(): Promise<UserModel[]> {
    const allUsers = await this.userModel.findAll()
    return allUsers 
  }

  findOne(id: number) {
    return `This action returns a #${id} user`;
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
