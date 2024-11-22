import { GetProductServiceInbound } from '@/inventory-lib/core/services/inbound/products';
import { ProductEntity } from '@/inventory-lib/core/model/entities';
import { GetProductServiceOutbound } from '@/inventory-lib/core/services/outbound/products';

export class GetProductUseCase implements GetProductServiceInbound {
  constructor(private readonly outbound: GetProductServiceOutbound) {}

  getProductsByBusiness(businessId: number): Promise<ProductEntity[]> {
    return this.outbound.getProductsByBusiness(businessId);
  }
}
