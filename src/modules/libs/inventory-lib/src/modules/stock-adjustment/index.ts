import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { stockAdjustmentProviders } from '@/inventory-lib/modules/stock-adjustment/stock-adjustment.provider';
import {
  ProductsDbEntity,
  PurchaseDbEntity,
  StockAdjustmentDbEntity,
  UserSessionDbEntity,
} from '@/infrastructure-lib/database/entities';
import {
  CreateStockAdjustmentService,
  GetStockAdjustmentsService,
} from '@/inventory-lib/application/services/stock-adjustment';
import {
  CreateStockAdjustmentUseCase,
  GetStockAdjustmentsUseCase,
} from '@/inventory-lib/core/usecases/stock-adjustment';
import {
  CreateStockAdjustmentAdapter,
  GetStockAdjustmentsAdapter,
} from '@/inventory-lib/infrastructure/adapter/stock-adjustment';
import { CreatePurchaseAdapter } from '@/purchase-lib/infrastructure/adapter/purchase';
import {
  GetProductByIdAdapter,
  UpdateProductAdapter,
} from '@/inventory-lib/infrastructure/adapter/products';
import { TypeOrmTransactionalRunner } from '@/core-lib/infrastructure/adapter/transaction/type-orm-transaction-runner';
import { UserSessionAdapter } from '@/auth-lib/infrastructure/adapter/login';

const entities = [
  StockAdjustmentDbEntity,
  PurchaseDbEntity,
  ProductsDbEntity,
  UserSessionDbEntity,
];

const services = [
  CreateStockAdjustmentService,
  GetStockAdjustmentsService,
  TypeOrmTransactionalRunner,
];

const useCases = [CreateStockAdjustmentUseCase, GetStockAdjustmentsUseCase];

const adapters = [
  CreateStockAdjustmentAdapter,
  GetStockAdjustmentsAdapter,
  CreatePurchaseAdapter,
  GetProductByIdAdapter,
  UpdateProductAdapter,
  UserSessionAdapter,
];

@Module({
  imports: [TypeOrmModule.forFeature(entities)],
  providers: [
    ...stockAdjustmentProviders,
    ...services,
    ...useCases,
    ...adapters,
  ],
  exports: [...services, ...useCases],
})
export class StockAdjustmentModule {}
