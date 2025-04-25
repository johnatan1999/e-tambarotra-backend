import { Module } from '@nestjs/common';
import * as ProductControllers from '../http-controllers/products';
import * as BusinessControllers from '../http-controllers/business';
import * as PurchaseControllers from '../http-controllers/purchase';
import * as StockAdjustmentControllers from '../http-controllers/stock-adjustment';
import * as SupplierControllers from '../http-controllers/supplier';
import * as OrderControllers from '../http-controllers/orders';
import * as CustomerControllers from '../http-controllers/customers';
import * as AuthControllers from '../http-controllers/auth';
import * as FilesControllers from '../http-controllers/files';
import * as UserControllers from '../http-controllers/users';
import * as DashboardControllers from '../http-controllers/dashboard';
import * as StateControllers from '../http-controllers/state';
import { InventoryLibModule } from '@/inventory-lib/modules/inventory-lib.module';
import { SalesLibModule } from '@/sales-lib/module/sales-lib.module';
import { AuthLibModule } from '@/auth-lib/modules/auth-lib.module';
import { DashboardLibModule } from '@/dashboard-lib/modules/dashboard-lib.module';
import { UsersLibModule } from '@/users-lib/module/users-lib.module';
import { CoreLibModule } from '@/core-lib/modules/core-lib.module';
import { PurchaseLibModule } from '@/purchase-lib/modules/purchase-lib.module';

const libraries = [
  InventoryLibModule,
  SalesLibModule,
  PurchaseLibModule,
  AuthLibModule,
  DashboardLibModule,
  UsersLibModule,
  CoreLibModule,
];
const controllers = [
  ...Object.values(ProductControllers),
  ...Object.values(BusinessControllers),
  ...Object.values(PurchaseControllers),
  ...Object.values(StockAdjustmentControllers),
  ...Object.values(SupplierControllers),
  ...Object.values(OrderControllers),
  ...Object.values(CustomerControllers),
  ...Object.values(AuthControllers),
  ...Object.values(FilesControllers),
  ...Object.values(DashboardControllers),
  ...Object.values(UserControllers),
  ...Object.values(StateControllers),
];

@Module({
  imports: [...libraries],
  exports: [AuthLibModule],
  controllers: [...controllers],
})
export class ApiControllerModule {}
