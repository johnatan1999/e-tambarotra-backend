import {
  BulkInsertProductsService,
  CreateProductService,
} from 'modules/libs/inventory-lib/src/application/services/products';
import { CreateProductUseCase } from '@/inventory-lib/core/usecases/products/create-product-use.case';
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
  UpdateProductUseCase,
} from '@/inventory-lib/core/usecases/products';
import {
  BulkInsertProductsAdapter,
  GetProductByIdAdapter,
  UpdateProductAdapter,
} from '@/inventory-lib/infrastructure/adapter/products';
import { UpdateProductService } from '@/inventory-lib/application/services/products/update-product.service';

const entities = [ProductsDbEntity, BusinessDbEntity];
const services = [
  CreateProductService,
  UpdateProductService,
  GetProductService,
  GetProductByIdService,
  BulkInsertProductsService,
];
const useCases = [
  CreateProductUseCase,
  UpdateProductUseCase,
  GetProductUseCase,
  GetProductByIdUseCase,
  BulkInsertProductsUseCase,
];
const adapters = [
  CreateProductAdapter,
  UpdateProductAdapter,
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
