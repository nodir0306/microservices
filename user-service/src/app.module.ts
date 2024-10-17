import { Module } from '@nestjs/common';

import { SequelizeModule } from '@nestjs/sequelize';
import { UserModule } from './modules';
@Module({
  imports: [
    SequelizeModule.forRoot({
      dialect: "postgres",
      database: "feane",
      username: "postgres",
      password: "2004",
      host: "localhost",
      port: 5432,
      autoLoadModels: true,
      synchronize: true,
      // sync: {force: true},
      models: [],
    }),
    UserModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
