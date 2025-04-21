import { CreateStockAdjustmentServiceInbound } from '@/inventory-lib/core/services/inbounds/stock-adjustment';
import { CreateStockAdjustmentServiceOutbound } from '@/inventory-lib/core/services/outbounds/stock-adjustment';
import { StockAdjustmentInput } from '@/inventory-lib/core/models/inputs';
import { StockAdjustmentEntity } from '@/inventory-lib/core/models/entities';
import { TransactionalRunner } from '@/core-lib/core/services/transaction/transaction-runner';
import { CreatePurchaseServiceOutbound } from '@/purchase-lib/core/services/outbounds/purchase';
import {
  GetProductByIdServiceOutbound,
  UpdateProductServiceOutbound,
} from '@/inventory-lib/core/services/outbounds/products';

export class CreateStockAdjustmentUseCase
  implements CreateStockAdjustmentServiceInbound
{
  constructor(
    private readonly createStockAdjustmentServiceOutbound: CreateStockAdjustmentServiceOutbound,
    private readonly createPurchaseServiceOutbound: CreatePurchaseServiceOutbound,
    private readonly getProductByIdServiceOutbound: GetProductByIdServiceOutbound,
    private readonly updateProductServiceOutbound: UpdateProductServiceOutbound,
    private readonly transactionRunner: TransactionalRunner,
  ) {}

  async create(
    userId: number,
    input: StockAdjustmentInput,
  ): Promise<StockAdjustmentEntity> {
    return this.transactionRunner.runInTransaction(async () => {
      // > 0 is a purchase
      if (input.adjustedQuantity > 0) {
        await this.createPurchaseServiceOutbound.createPurchase({
          productId: input.productId,
          quantity: input.adjustedQuantity,
          purchaseDate: input.date,
          unitPrice: input.costPrice,
        });
      }
      const product = await this.getProductByIdServiceOutbound.getProductById(
        input.productId,
      );
      await this.updateProductServiceOutbound.updateProduct(
        String(input.productId),
        {
          ...product,
          availableStock: product.availableStock + input.adjustedQuantity,
        },
      );
      return this.createStockAdjustmentServiceOutbound.create(userId, input);
    });
  }
}
