import { Module } from '@nestjs/common';
import * as ProductControllers from '../http-controllers/products';
import * as BusinessControllers from '../http-controllers/business';
import * as OrderControllers from '../http-controllers/orders';
import { InventoryLibModule } from '@/inventory-lib/modules/inventory-lib.module';
import { SalesLibModule } from '@/sales-lib/module/sales-lib.module';

const libraries = [InventoryLibModule, SalesLibModule];
const controllers = [
  ...Object.values(ProductControllers),
  ...Object.values(BusinessControllers),
  ...Object.values(OrderControllers),
];

@Module({
  imports: [...libraries],
  controllers: [...controllers],
})
export class ApiControllerModule {}
