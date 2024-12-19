import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ApiControllerModule } from './modules/entry-point/src/module/api-controller.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import DbConfig from './config/db.config';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';
import { AccountAuthGuard } from './modules/entry-point/src/guards/account-auth.guard';
import { APP_GUARD } from '@nestjs/core';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..', 'uploads'),
      serveRoot: '/uploads',
    }),
    TypeOrmModule.forRoot(DbConfig),
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    ApiControllerModule,
  ],
  controllers: [AppController],
  providers: [
    AppService,
    {
      provide: APP_GUARD,
      useClass: AccountAuthGuard,
    },
  ],
})
export class AppModule {}
