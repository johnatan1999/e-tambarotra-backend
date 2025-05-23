import { UpdateProductServiceInbound } from '@/inventory-lib/core/services/inbounds/products';
import { UpdateProductServiceOutbound } from '@/inventory-lib/core/services/outbounds/products';
import { ProductInput } from 'modules/libs/inventory-lib/src/core/models/inputs';
import { ProductEntity } from 'modules/libs/inventory-lib/src/core/models/entities';

export class UpdateProductUseCase implements UpdateProductServiceInbound {
  constructor(private readonly outbound: UpdateProductServiceOutbound) {}

  async updateProduct(
    productId: string,
    product: ProductInput,
  ): Promise<ProductEntity> {
    return this.outbound.updateProduct(productId, product);
  }
}
