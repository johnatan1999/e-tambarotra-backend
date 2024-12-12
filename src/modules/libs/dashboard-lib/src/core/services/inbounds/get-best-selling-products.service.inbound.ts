import { BestSellerEntity } from '@/dashboard-lib/core/models/entities';

export const GET_BEST_SELLING_PRODUCTS_SERVICE_INBOUND =
  'GET_BEST_SELLING_PRODUCTS_SERVICE_INBOUND';

export interface GetBestSellingProductsServiceInbound {
  /**
   * Get the best-selling products.
   *
   * @param businessId The business id.
   * @param limit The number of products to return.
   * @returns The best-selling products.
   */
  getBestSellingProducts(
    businessId: string,
    limit?: number,
  ): Promise<BestSellerEntity[]>;
}
