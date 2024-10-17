import { Module } from '@nestjs/common';
import { CategoryModule, ProductModule } from '@modules';
import { UserModule } from './modules/user/user.module';

@Module({
  imports: [CategoryModule, ProductModule,UserModule],
})
export class AppModule {}
