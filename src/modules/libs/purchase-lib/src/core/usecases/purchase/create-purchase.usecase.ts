import { CreatePurchaseServiceInbound } from '@/purchase-lib/core/services/inbounds/purchase';
import { CreatePurchaseServiceOutbound } from '@/purchase-lib/core/services/outbounds/purchase';
import { CreatePurchaseInput } from '@/purchase-lib/core/models/inputs';
import { PurchaseEntity } from '@/purchase-lib/core/models/entities';
import {
  GetProductByIdServiceOutbound,
  UpdateProductServiceOutbound,
} from '@/inventory-lib/core/services/outbounds/products';
import { TransactionalRunner } from '@/core-lib/core/services/transaction/transaction-runner';

export class CreatePurchaseUseCase implements CreatePurchaseServiceInbound {
  constructor(
    private readonly createPurchaseServiceOutbound: CreatePurchaseServiceOutbound,
    private readonly getProductByIdServiceOutbound: GetProductByIdServiceOutbound,
    private readonly updateProductServiceOutbound: UpdateProductServiceOutbound,
    private readonly transactionRunner: TransactionalRunner,
  ) {}

  async createPurchase(
    purchaseInput: CreatePurchaseInput,
  ): Promise<PurchaseEntity> {
    return this.transactionRunner.runInTransaction(async () => {
      const product = await this.getProductByIdServiceOutbound.getProductById(
        purchaseInput.productId,
      );
      await this.updateProductServiceOutbound.updateProduct(
        String(purchaseInput.productId),
        product,
      );
      return this.createPurchaseServiceOutbound.createPurchase(purchaseInput);
    });
  }
}
