import { BulkInsertProductsServiceInbound } from '@/inventory-lib/core/services/inbounds/products';
import { BulkInsertProductsServiceOutbound } from '@/inventory-lib/core/services/outbounds/products';
import { ProductInput } from '@/inventory-lib/core/model/inputs';

export class BulkInsertProductsUseCase
  implements BulkInsertProductsServiceInbound
{
  constructor(private readonly outbound: BulkInsertProductsServiceOutbound) {}

  async createProducts(products: ProductInput[]): Promise<void> {
    return this.outbound.createProducts(
      products.map((p) => ({
        ...p,
        initialQuantity: p.initialQuantity || p.availableStock,
      })),
    );
  }
}
