import { Module } from '@nestjs/common';
import * as ProductControllers from '../http-controllers/products';
import * as BusinessControllers from '../http-controllers/business';
import { InventoryLibModule } from '@/inventory-lib/modules/inventory-lib.module';

const libraries = [InventoryLibModule];
const controllers = [
  ...Object.values(ProductControllers),
  ...Object.values(BusinessControllers),
];

@Module({
  imports: [...libraries],
  controllers: [...controllers],
})
export class ApiControllerModule {}
