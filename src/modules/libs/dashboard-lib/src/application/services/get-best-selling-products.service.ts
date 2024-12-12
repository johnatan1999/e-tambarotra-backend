import {
  GET_BEST_SELLING_PRODUCTS_SERVICE_INBOUND,
  GetBestSellingProductsServiceInbound,
} from '@/dashboard-lib/core/services/inbounds';
import { Inject, Injectable } from '@nestjs/common';
import { BestSellerEntity } from '@/dashboard-lib/core/models/entities';

@Injectable()
export class GetBestSellingProductsService {
  constructor(
    @Inject(GET_BEST_SELLING_PRODUCTS_SERVICE_INBOUND)
    private readonly inbound: GetBestSellingProductsServiceInbound,
  ) {}

  /**
   * Service to get the best-selling products for a business.
   *
   * @class GetBestSellingProductsService
   * @implements {GetBestSellingProductsServiceInbound}
   */
  async getBestSellingProducts(
    businessId: string,
    limit?: number,
  ): Promise<BestSellerEntity[]> {
    return this.inbound.getBestSellingProducts(businessId, limit);
  }
}
