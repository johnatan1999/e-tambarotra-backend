import { CreateProductServiceInbound } from '@/inventory-lib/core/services/inbounds/products';
import { ProductInput } from '@/inventory-lib/core/model/inputs';
import { ProductEntity } from '@/inventory-lib/core/model/entities';
import { CreateProductServiceOutbound } from '@/inventory-lib/core/services/outbounds/products';

export class CreateProductUsecase implements CreateProductServiceInbound {
  constructor(private readonly outbound: CreateProductServiceOutbound) {}

  createProduct(article: ProductInput): Promise<ProductEntity> {
    return this.outbound.createProduct(article);
  }
}
