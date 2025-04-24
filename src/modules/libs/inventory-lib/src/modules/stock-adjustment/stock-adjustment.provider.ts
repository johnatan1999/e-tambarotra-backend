import { Provider } from '@nestjs/common';
import {
  CREATE_STOCK_ADJUSTMENT_SERVICE_INBOUND,
  GET_STOCK_ADJUSTMENTS_SERVICE_INBOUND,
} from '@/inventory-lib/core/services/inbounds/stock-adjustment';
import {
  CreateStockAdjustmentAdapter,
  GetStockAdjustmentsAdapter,
} from '@/inventory-lib/infrastructure/adapter/stock-adjustment';
import {
  CreateStockAdjustmentUseCase,
  GetStockAdjustmentsUseCase,
} from '@/inventory-lib/core/usecases/stock-adjustment';
import { CreatePurchaseServiceOutbound } from '@/purchase-lib/core/services/outbounds/purchase';
import {
  GetProductByIdServiceOutbound,
  UpdateProductServiceOutbound,
} from '@/inventory-lib/core/services/outbounds/products';
import { TransactionalRunner } from '@/core-lib/core/services/transaction/transaction-runner';
import {
  CreateStockAdjustmentServiceOutbound,
  GetStockAdjustmentsServiceOutbound,
} from '@/inventory-lib/core/services/outbounds/stock-adjustment';
import { CreatePurchaseAdapter } from '@/purchase-lib/infrastructure/adapter/purchase';
import {
  GetProductByIdAdapter,
  UpdateProductAdapter,
} from '@/inventory-lib/infrastructure/adapter/products';
import { TypeOrmTransactionalRunner } from '@/core-lib/infrastructure/adapter/transaction/type-orm-transaction-runner';
import { UserSessionServiceOutbound } from '@/auth-lib/core/services/outbounds/login';
import { UserSessionAdapter } from '@/auth-lib/infrastructure/adapter/login';

export const stockAdjustmentProviders: Provider[] = [
  {
    provide: GET_STOCK_ADJUSTMENTS_SERVICE_INBOUND,
    inject: [GetStockAdjustmentsAdapter, UserSessionAdapter],
    useFactory: (
      outbound: GetStockAdjustmentsServiceOutbound,
      userSessionOutbound: UserSessionServiceOutbound,
    ) => {
      return new GetStockAdjustmentsUseCase(outbound, userSessionOutbound);
    },
  },
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
