import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';

import {Maratona} from './maratona/maratona.model';
import {MaratonaModule} from './maratona/maratona.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';



@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: '.env'
  }),
  TypeOrmModule.forRoot({
       // @ts-ignore
      type: process.env.TYPEORM_CONNECTION,
      database: process.env.TYPEORM_DATABASE,
      entities:[Maratona]
  }),
    MaratonaModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
