import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { stockAdjustmentProviders } from '@/inventory-lib/modules/stock-adjustment/stock-adjustment.provider';
import {
  ProductsDbEntity,
  PurchaseDbEntity,
  StockAdjustmentDbEntity,
} from '@/infrastructure-lib/database/entities';
import { CreateStockAdjustmentService } from '@/inventory-lib/application/services/stock-adjustment';
import { CreateStockAdjustmentUseCase } from '@/inventory-lib/core/usecases/stock-adjustment';
import { CreateStockAdjustmentAdapter } from '@/inventory-lib/infrastructure/adapter/stock-adjustment';
import { CreatePurchaseAdapter } from '@/purchase-lib/infrastructure/adapter/purchase';
import {
  GetProductByIdAdapter,
  UpdateProductAdapter,
} from '@/inventory-lib/infrastructure/adapter/products';
import { TypeOrmTransactionalRunner } from '@/core-lib/infrastructure/adapter/transaction/type-orm-transaction-runner';

const entities = [StockAdjustmentDbEntity, PurchaseDbEntity, ProductsDbEntity];

const services = [CreateStockAdjustmentService, TypeOrmTransactionalRunner];

const useCases = [CreateStockAdjustmentUseCase];

const adapters = [
  CreateStockAdjustmentAdapter,
  CreatePurchaseAdapter,
  GetProductByIdAdapter,
  UpdateProductAdapter,
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
