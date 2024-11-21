import { CreateProductService } from 'modules/libs/inventory-lib/src/application/services/products';
import { CreateProductUsecase } from '@/inventory-lib/core/usecases/products/create-product.usecase';
import { Module } from '@nestjs/common';
import { ArticleProviders } from './product.provider';
import { CreateProductAdapter } from '@/inventory-lib/adapter/products/create-product.adapter';

const services = [CreateProductService];
const usecases = [CreateProductUsecase];
const adapters = [CreateProductAdapter];

@Module({
  providers: [...ArticleProviders, ...services, ...usecases, ...adapters],
  exports: [...services, ...usecases],
})
export class ArticleModule {}
