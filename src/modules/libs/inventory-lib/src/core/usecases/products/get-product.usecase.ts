import { GetProductServiceInbound } from '@/inventory-lib/core/services/inbounds/products';
import { ProductEntity } from 'modules/libs/inventory-lib/src/core/models/entities';
import { GetProductServiceOutbound } from '@/inventory-lib/core/services/outbounds/products';

export class GetProductUseCase implements GetProductServiceInbound {
  constructor(private readonly outbound: GetProductServiceOutbound) {}

  getProductsByBusiness(businessId: number): Promise<ProductEntity[]> {
    return this.outbound.getProductsByBusiness(businessId);
  }
}
