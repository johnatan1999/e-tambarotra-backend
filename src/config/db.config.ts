import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import {
  CustomerDbEntity,
  ExpenseDbEntity,
  OrderDbEntity,
  OrderItemDbEntity,
  ProductsDbEntity,
} from '@/infrastructure-lib/database/entities';
import { BusinessDbEntity } from '@/infrastructure-lib/database/entities/business.db.entity';
import { UserDbEntity } from '@/infrastructure-lib/database/entities/users.db.entity';
import { StockReajustmentDbEntity } from '@/infrastructure-lib/database/entities/stock-reajustment.db.entity';
import { SalesDbEntity } from '@/infrastructure-lib/database/entities/sales.db.entity';

const DbConfig: TypeOrmModuleOptions = {
  type: 'sqlite',
  database: 'e-tambarotra.prod.sqlite',
  // entities: [__dirname + '/**/*.entity{.ts,.js}'],
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
  ],
  synchronize: true,
};
export default DbConfig;
