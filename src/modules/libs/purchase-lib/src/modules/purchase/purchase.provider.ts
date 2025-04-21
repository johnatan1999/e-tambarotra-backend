import { Provider } from '@nestjs/common';
import { CREATE_PURCHASE_SERVICE_INBOUND } from '@/purchase-lib/core/services/inbounds/purchase';
import { CreatePurchaseAdapter } from '@/purchase-lib/infrastructure/adapter/purchase';
import { CreatePurchaseServiceOutbound } from '@/purchase-lib/core/services/outbounds/purchase';
import { CreatePurchaseUseCase } from '@/purchase-lib/core/usecases/purchase';
import {
  GetProductByIdAdapter,
  UpdateProductAdapter,
} from '@/inventory-lib/infrastructure/adapter/products';
import {
  GetProductByIdServiceOutbound,
  UpdateProductServiceOutbound,
} from '@/inventory-lib/core/services/outbounds/products';
import { TransactionalRunner } from '@/core-lib/core/services/transaction/transaction-runner';
import { TypeOrmTransactionalRunner } from '@/core-lib/infrastructure/adapter/transaction/type-orm-transaction-runner';

export const PurchaseProvider: Provider[] = [
  {
    provide: CREATE_PURCHASE_SERVICE_INBOUND,
    inject: [
      CreatePurchaseAdapter,
      GetProductByIdAdapter,
      UpdateProductAdapter,
      TypeOrmTransactionalRunner,
    ],
    useFactory: (
      outbound: CreatePurchaseServiceOutbound,
      getProductOutbound: GetProductByIdServiceOutbound,
      updateProductOutbound: UpdateProductServiceOutbound,
      transactionRunner: TransactionalRunner,
    ) => {
      return new CreatePurchaseUseCase(
        outbound,
        getProductOutbound,
        updateProductOutbound,
        transactionRunner,
      );
    },
  },
];
