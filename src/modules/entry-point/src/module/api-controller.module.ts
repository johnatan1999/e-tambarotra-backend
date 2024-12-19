import { Module } from '@nestjs/common';
import * as ProductControllers from '../http-controllers/products';
import * as BusinessControllers from '../http-controllers/business';
import * as OrderControllers from '../http-controllers/orders';
import * as CustomerControllers from '../http-controllers/customers';
import * as AuthControllers from '../http-controllers/auth';
import * as FilesControllers from '../http-controllers/files';
import * as DashboardControllers from '../http-controllers/dashboard';
import { InventoryLibModule } from '@/inventory-lib/modules/inventory-lib.module';
import { SalesLibModule } from '@/sales-lib/module/sales-lib.module';
import { AuthLibModule } from '@/auth-lib/modules/auth-lib.module';
import { DashboardLibModule } from '@/dashboard-lib/modules/dashboard-lib.module';
import { UsersLibModule } from '@/users-lib/module/users-lib.module';

const libraries = [
  InventoryLibModule,
  SalesLibModule,
  AuthLibModule,
  DashboardLibModule,
  UsersLibModule,
];
const controllers = [
  ...Object.values(ProductControllers),
  ...Object.values(BusinessControllers),
  ...Object.values(OrderControllers),
  ...Object.values(CustomerControllers),
  ...Object.values(AuthControllers),
  ...Object.values(FilesControllers),
  ...Object.values(DashboardControllers),
];

@Module({
  imports: [...libraries],
  exports: [AuthLibModule],
  controllers: [...controllers],
})
export class ApiControllerModule {}
