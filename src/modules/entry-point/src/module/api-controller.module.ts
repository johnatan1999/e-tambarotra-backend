import { Module } from '@nestjs/common';
import * as ProductControllers from '../http-controllers/products';
import * as BusinessControllers from '../http-controllers/business';
import * as OrderControllers from '../http-controllers/orders';
import * as CustomerControllers from '../http-controllers/customers';
import * as AuthControllers from '../http-controllers/auth';
import { InventoryLibModule } from '@/inventory-lib/modules/inventory-lib.module';
import { SalesLibModule } from '@/sales-lib/module/sales-lib.module';
import { AuthLibModule } from '@/auth-lib/modules/auth-lib.module';

const libraries = [InventoryLibModule, SalesLibModule, AuthLibModule];
const controllers = [
  ...Object.values(ProductControllers),
  ...Object.values(BusinessControllers),
  ...Object.values(OrderControllers),
  ...Object.values(CustomerControllers),
  ...Object.values(AuthControllers),
];

@Module({
  imports: [...libraries],
  controllers: [...controllers],
})
export class ApiControllerModule {}
