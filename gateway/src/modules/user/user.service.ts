import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { UserClient } from './user.cliend';

@Injectable()
export class UserService {
  constructor(private userClient: UserClient){}
  create(createUserDto: CreateUserDto) {
    return this.userClient.createUser(createUserDto)
  }

  findAll() {
    return this.userClient.findAllUsers()
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
