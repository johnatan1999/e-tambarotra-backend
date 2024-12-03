import {
  BulkInsertProductsService,
  CreateProductService,
} from 'modules/libs/inventory-lib/src/application/services/products';
import { CreateProductUsecase } from '@/inventory-lib/core/usecases/products/create-product.usecase';
import { Module } from '@nestjs/common';
import { ProductsProviders } from './product.provider';
import { CreateProductAdapter } from '@/inventory-lib/infrastructure/adapter/products/create-product.adapter';
import {
  BusinessDbEntity,
  ProductsDbEntity,
} from '@/infrastructure-lib/database/entities';
import { TypeOrmModule } from '@nestjs/typeorm';
import { GetProductAdapter } from '@/inventory-lib/infrastructure/adapter/products/get-product.adapter';
import { GetProductUseCase } from '@/inventory-lib/core/usecases/products/get-product.usecase';
import { GetProductService } from '@/inventory-lib/application/services/products/get-product.service';
import { GetProductByIdService } from '@/inventory-lib/application/services/products/get-product-by-id.service';
import {
  BulkInsertProductsUseCase,
  GetProductByIdUseCase,
} from '@/inventory-lib/core/usecases/products';
import {
  BulkInsertProductsAdapter,
  GetProductByIdAdapter,
} from '@/inventory-lib/infrastructure/adapter/products';

const entities = [ProductsDbEntity, BusinessDbEntity];
const services = [
  CreateProductService,
  GetProductService,
  GetProductByIdService,
  BulkInsertProductsService,
];
const useCases = [
  CreateProductUsecase,
  GetProductUseCase,
  GetProductByIdUseCase,
  BulkInsertProductsUseCase,
];
const adapters = [
  CreateProductAdapter,
  GetProductAdapter,
  GetProductByIdAdapter,
  BulkInsertProductsAdapter,
];

@Module({
  imports: [TypeOrmModule.forFeature(entities)],
  providers: [...ProductsProviders, ...services, ...useCases, ...adapters],
  exports: [...services, ...useCases],
})
export class ProductsModule {}
