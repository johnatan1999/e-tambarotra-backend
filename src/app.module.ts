import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ApiControllerModule } from './modules/entry-point/src/module/api-controller.module';
import { InventoryLibModule } from '@/inventory-lib/modules/inventory-lib.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import DbConfig from './config/db.config';
import { SalesLibModule } from '@/sales-lib/module/sales-lib.module';

@Module({
  imports: [TypeOrmModule.forRoot(DbConfig), ApiControllerModule],
  controllers: [AppController],
  providers: [AppService, InventoryLibModule, SalesLibModule],
})
export class AppModule {}
