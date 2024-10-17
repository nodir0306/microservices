import { Injectable, OnModuleInit } from '@nestjs/common';
import {
  ClientProxy,
  ClientProxyFactory,
  Transport,
} from '@nestjs/microservices';
import { CreateUserDto } from './dto/create-user.dto';

@Injectable()
export class UserClient implements OnModuleInit {
  private client: ClientProxy;

  constructor() {
    this.client = ClientProxyFactory.create({
        transport: Transport.TCP,
        options: {
          port: 3005,
          host: 'localhost'
        }
    });
  }

  async onModuleInit() {
    await this.client.connect();
  }
  
  createUser(user: CreateUserDto){
    return this.client.send("createUser",user)
  }
  findAllUsers(){
    return this.client.send('findAllUser','')
  }


}
