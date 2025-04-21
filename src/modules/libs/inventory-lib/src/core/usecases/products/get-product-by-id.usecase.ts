import { GetProductByIdServiceInbound } from '@/inventory-lib/core/services/inbounds/products/get-product-by-id.service.inbound';
import { ProductEntity } from 'modules/libs/inventory-lib/src/core/models/entities';
import { GetProductByIdServiceOutbound } from '@/inventory-lib/core/services/outbounds/products';
import { NotFoundException } from '@/core-lib/core/exceptions/not-found.exception';

export class GetProductByIdUseCase implements GetProductByIdServiceInbound {
  constructor(private readonly outbound: GetProductByIdServiceOutbound) {}

  async getProductById(productId: number): Promise<ProductEntity> {
    const product = await this.outbound.getProductById(productId);
    if (!product) {
      throw new NotFoundException('Product not found');
    }
    return product;
  }
}
