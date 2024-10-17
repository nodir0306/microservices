import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { UserClient } from './user.cliend';

@Module({
  controllers: [UserController],
  providers: [UserService,UserClient],
})
export class UserModule {}
