import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { FighterModule } from './module/fighter.module';
import { APP_FILTER } from '@nestjs/core';
import { GlobalException } from './exception/global.exception';
import { ConfigModule } from '@nestjs/config';
import { MongodbConfigService } from './config/database.providers';

@Module({
  imports: [
    FighterModule,
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    MongooseModule.forRootAsync({
      useClass: MongodbConfigService,
      inject: [MongodbConfigService]
    })
  ],
  providers: [
    {
      provide: APP_FILTER,
      useClass: GlobalException
    }
  ]
})
export class AppModule { }
