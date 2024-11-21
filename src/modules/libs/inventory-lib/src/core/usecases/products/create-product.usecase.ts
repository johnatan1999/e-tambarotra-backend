import { CreateProductServiceInbound } from 'modules/libs/inventory-lib/src/core/services/inbound/products';
import { ProductInput } from '@/inventory-lib/core/model/inputs';
import { ProductEntity } from '@/inventory-lib/core/model/entities';
import { CreateProductServiceOutbound } from 'modules/libs/inventory-lib/src/core/services/outbound/products';

export class CreateProductUsecase implements CreateProductServiceInbound {
  constructor(private readonly outbound: CreateProductServiceOutbound) {}

  createProduct(article: ProductInput): Promise<ProductEntity> {
    return this.outbound.createProduct(article);
  }
}
