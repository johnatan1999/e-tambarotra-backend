import { CreateProductServiceInbound } from '@/inventory-lib/core/services/inbounds/products';
import { ProductInput } from 'modules/libs/inventory-lib/src/core/models/inputs';
import { ProductEntity } from 'modules/libs/inventory-lib/src/core/models/entities';
import { CreateProductServiceOutbound } from '@/inventory-lib/core/services/outbounds/products';
import { CreatePurchaseServiceOutbound } from '@/purchase-lib/core/services/outbounds/purchase';
import { TransactionalRunner } from '@/core-lib/core/services/transaction/transaction-runner';

export class CreateProductUseCase implements CreateProductServiceInbound {
  constructor(
    private readonly outbound: CreateProductServiceOutbound,
    private readonly purchaseService: CreatePurchaseServiceOutbound,
    private readonly transaction: TransactionalRunner,
  ) {}

  async createProduct(product: ProductInput): Promise<ProductEntity> {
    return this.transaction.runInTransaction(async () => {
      const newProduct = await this.outbound.createProduct({
        ...product,
        initialQuantity: product.initialQuantity || product.availableStock,
        firstPurchasePrice: product.purchasePrice,
      });
      await this.purchaseService.createPurchase({
        productId: newProduct.id,
        quantity: product.initialQuantity || product.availableStock,
        purchaseDate: new Date(),
        unitPrice: product.purchasePrice,
      });
      return newProduct;
    });
  }
}
