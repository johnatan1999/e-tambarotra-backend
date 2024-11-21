import { Module } from '@nestjs/common';
import * as Controllers from '../http-controllers';
import { InventoryLibModule } from '@/inventory-lib/modules/inventory-lib.module';

const libraries = [InventoryLibModule];

@Module({
  imports: [...libraries],
  controllers: Object.values(Controllers),
})
export class ApiControllerModule {}
