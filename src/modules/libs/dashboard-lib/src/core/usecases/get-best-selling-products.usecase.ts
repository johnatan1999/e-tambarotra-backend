import { GetBestSellingProductsServiceInbound } from '@/dashboard-lib/core/services/inbounds';
import { GetBestSellingProductsServiceOutbound } from '@/dashboard-lib/core/services/outbounds';
import { BestSellerEntity } from '@/dashboard-lib/core/models/entities';

export class GetBestSellingProductsUseCase
  implements GetBestSellingProductsServiceInbound
{
  public static readonly DEFAULT_LIMIT = 5;

  constructor(
    private readonly outbound: GetBestSellingProductsServiceOutbound,
  ) {}

  async getBestSellingProducts(
    businessId: string,
    limit?: number,
  ): Promise<BestSellerEntity[]> {
    return this.outbound.getBestSellingProducts(
      businessId,
      limit ?? GetBestSellingProductsUseCase.DEFAULT_LIMIT,
    );
  }
}
