import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import { ProductsDbEntity } from '@/inventory-lib/infrastructure/database/entities';
import { BusinessDbEntity } from '@/inventory-lib/infrastructure/database/entities/business.db.entity';
import { UserDbEntity } from '@/inventory-lib/infrastructure/database/entities/users.db.entity';
import { StockReajustmentDbEntity } from '@/inventory-lib/infrastructure/database/entities/stock-reajustment.db.entity';
import { SalesDbEntity } from '@/inventory-lib/infrastructure/database/entities/sales.db.entity';

const DbConfig: TypeOrmModuleOptions = {
  type: 'sqlite',
  database: 'e-tambarotra.sqlite',
  // entities: [__dirname + '/**/*.entity{.ts,.js}'],
  entities: [
    ProductsDbEntity,
    BusinessDbEntity,
    UserDbEntity,
    StockReajustmentDbEntity,
    SalesDbEntity,
  ],
  synchronize: true,
};
export default DbConfig;
