import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ApiControllerModule } from './modules/entry-point/src/module/api-controller.module';
import { InventoryLibModule } from '@/inventory-lib/modules/inventory-lib.module';

@Module({
  imports: [ApiControllerModule],
  controllers: [AppController],
  providers: [AppService, InventoryLibModule],
})
export class AppModule {}
