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
  ],
  synchronize: true,
};
export default DbConfig;
