import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import {
  BusinessDbEntity,
  CustomerDbEntity,
  ExpenseDbEntity,
  OrderDbEntity,
  OrderItemDbEntity,
  ProductsDbEntity,
  SalesDbEntity,
  StockReajustmentDbEntity,
  UserDbEntity,
  UserSessionDbEntity,
} from '@/infrastructure-lib/database/entities';
import { PurchaseDbEntity } from '@/infrastructure-lib/database/entities/purchase.db.entity';

const DbConfig: TypeOrmModuleOptions = {
  type: 'sqlite',
  database: 'e-tambarotra.sqlite',
  // entities: [__dirname + '/**/*.db.entity{.ts,.js}'],
  entities: [
    ProductsDbEntity,
    BusinessDbEntity,
    UserDbEntity,
    StockReajustmentDbEntity,
    SalesDbEntity,
    OrderDbEntity,
    OrderItemDbEntity,
    CustomerDbEntity,
    ExpenseDbEntity,
    UserSessionDbEntity,
    PurchaseDbEntity,
  ],
  synchronize: true,
};
export default DbConfig;
