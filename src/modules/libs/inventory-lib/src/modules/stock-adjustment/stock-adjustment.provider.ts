import { Provider } from '@nestjs/common';
import { CREATE_STOCK_ADJUSTMENT_SERVICE_INBOUND } from '@/inventory-lib/core/services/inbounds/stock-adjustment';
import { CreateStockAdjustmentAdapter } from '@/inventory-lib/infrastructure/adapter/stock-adjustment';
import { CreateStockAdjustmentUseCase } from '@/inventory-lib/core/usecases/stock-adjustment';
import { CreatePurchaseServiceOutbound } from '@/purchase-lib/core/services/outbounds/purchase';
import {
  GetProductByIdServiceOutbound,
  UpdateProductServiceOutbound,
} from '@/inventory-lib/core/services/outbounds/products';
import { TransactionalRunner } from '@/core-lib/core/services/transaction/transaction-runner';
import { CreateStockAdjustmentServiceOutbound } from '@/inventory-lib/core/services/outbounds/stock-adjustment';
import { CreatePurchaseAdapter } from '@/purchase-lib/infrastructure/adapter/purchase';
import {
  GetProductByIdAdapter,
  UpdateProductAdapter,
} from '@/inventory-lib/infrastructure/adapter/products';
import { TypeOrmTransactionalRunner } from '@/core-lib/infrastructure/adapter/transaction/type-orm-transaction-runner';

export const stockAdjustmentProviders: Provider[] = [
  {
    provide: CREATE_STOCK_ADJUSTMENT_SERVICE_INBOUND,
    inject: [
      CreateStockAdjustmentAdapter,
      CreatePurchaseAdapter,
      GetProductByIdAdapter,
      UpdateProductAdapter,
      TypeOrmTransactionalRunner,
    ],
    useFactory: (
      outbound: CreateStockAdjustmentServiceOutbound,
      purchaseServiceOutbound: CreatePurchaseServiceOutbound,
      getProductOutbound: GetProductByIdServiceOutbound,
      updateProductOutbound: UpdateProductServiceOutbound,
      transactionRunner: TransactionalRunner,
    ) => {
      return new CreateStockAdjustmentUseCase(
        outbound,
        purchaseServiceOutbound,
        getProductOutbound,
        updateProductOutbound,
        transactionRunner,
      );
    },
  },
];
