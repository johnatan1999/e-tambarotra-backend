import { GetLatestProductsServiceInbound } from '@/dashboard-lib/core/services/inbounds';
import { GetLatestProductsServiceOutbound } from '@/dashboard-lib/core/services/outbounds';
import { ProductEntity } from '@/inventory-lib/core/model/entities';

export class GetLatestProductsUseCase
  implements GetLatestProductsServiceInbound
{
  public static readonly DEFAULT_LIMIT = 10;

  constructor(private readonly outbound: GetLatestProductsServiceOutbound) {}

  async getLatestProducts(
    businessId: number,
    limit?: number,
  ): Promise<ProductEntity[]> {
    return this.outbound.getLatestProducts(
      businessId,
      limit ?? GetLatestProductsUseCase.DEFAULT_LIMIT,
    );
  }
}
