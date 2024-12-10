import { Inject, Injectable } from '@nestjs/common';
import {
  GET_LATEST_PRODUCTS_SERVICE_INBOUND,
  GetLatestProductsServiceInbound,
} from '@/dashboard-lib/core/services/inbounds';
import { ProductEntity } from '@/inventory-lib/core/model/entities';

@Injectable()
export class GetLatestProductsService {
  constructor(
    @Inject(GET_LATEST_PRODUCTS_SERVICE_INBOUND)
    private readonly inbound: GetLatestProductsServiceInbound,
  ) {}

  /**
   * Service to get the latest products for a business.
   *
   * @class GetLatestProductsService
   * @implements {GetLatestProductsServiceInbound}
   */
  async getLatestProducts(
    businessId: number,
    limit: number,
  ): Promise<ProductEntity[]> {
    return this.inbound.getLatestProducts(businessId, limit);
  }
}
