import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import {
  ProductsDbEntity,
  PurchaseDbEntity,
} from '@/infrastructure-lib/database/entities';
import { PurchaseProvider } from '@/purchase-lib/modules/purchase/purchase.provider';
import { CreatePurchaseAdapter } from '@/purchase-lib/infrastructure/adapter/purchase';
import { CreatePurchaseUseCase } from '@/purchase-lib/core/usecases/purchase';
import { CreatePurchaseService } from '@/purchase-lib/application/services/purchase';
import { TypeOrmTransactionalRunner } from '@/core-lib/infrastructure/adapter/transaction/type-orm-transaction-runner';
import {
  GetProductByIdAdapter,
  UpdateProductAdapter,
} from '@/inventory-lib/infrastructure/adapter/products';

const entities = [PurchaseDbEntity, ProductsDbEntity];

const services = [CreatePurchaseService, TypeOrmTransactionalRunner];

const useCases = [CreatePurchaseUseCase];

const adapters = [
  CreatePurchaseAdapter,
  GetProductByIdAdapter,
  UpdateProductAdapter,
];

@Module({
  imports: [TypeOrmModule.forFeature(entities)],
  providers: [...PurchaseProvider, ...services, ...useCases, ...adapters],
  exports: [...services, ...useCases, ...adapters],
})
export class PurchaseModule {}
