import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import { ProductsDbEntity } from '@/inventory-lib/infrastructure/database/entities';

const DbConfig: TypeOrmModuleOptions = {
  type: 'sqlite',
  database: 'e-tambarotra.sqlite',
  // entities: [__dirname + '/**/*.entity{.ts,.js}'],
  entities: [ProductsDbEntity],
  synchronize: true,
};
export default DbConfig;
