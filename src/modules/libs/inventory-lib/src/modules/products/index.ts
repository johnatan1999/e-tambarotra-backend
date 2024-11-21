import { CreateProductService } from 'modules/libs/inventory-lib/src/application/services/products';
import { CreateProductUsecase } from '@/inventory-lib/core/usecases/products/create-product.usecase';
import { Module } from '@nestjs/common';
import { ProductsProviders } from './product.provider';
import { CreateProductAdapter } from '@/inventory-lib/infrastructure/adapter/products/create-product.adapter';
import { ProductsDbEntity } from '@/inventory-lib/infrastructure/database/entities';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BusinessDbEntity } from '@/inventory-lib/infrastructure/database/entities/business.db.entity';
import { UserDbEntity } from '@/inventory-lib/infrastructure/database/entities/users.db.entity';
import { SalesDbEntity } from '@/inventory-lib/infrastructure/database/entities/sales.db.entity';
import { StockReajustmentDbEntity } from '@/inventory-lib/infrastructure/database/entities/stock-reajustment.db.entity';

const entities = [
  ProductsDbEntity,
  BusinessDbEntity,
  UserDbEntity,
  SalesDbEntity,
  StockReajustmentDbEntity,
];
const services = [CreateProductService];
const usecases = [CreateProductUsecase];
const adapters = [CreateProductAdapter];

@Module({
  imports: [TypeOrmModule.forFeature(entities)],
  providers: [
    ...ProductsProviders,
    ...entities,
    ...services,
    ...usecases,
    ...adapters,
  ],
  exports: [...services, ...usecases],
})
export class ProductsModule {}
