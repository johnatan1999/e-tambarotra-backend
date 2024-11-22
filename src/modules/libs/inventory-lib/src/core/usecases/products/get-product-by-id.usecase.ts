import { GetProductByIdServiceInbound } from '@/inventory-lib/core/services/inbound/products/get-product-by-id.service.inbound';
import { ProductEntity } from '@/inventory-lib/core/model/entities';
import { GetProductByIdServiceOutbound } from '@/inventory-lib/core/services/outbound/products';
import { NotFoundException } from '@/inventory-lib/core/exceptions/not-found.exception';

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
