import { BestSellerEntity } from '@/dashboard-lib/core/models/entities';

export const GET_BEST_SELLING_PRODUCTS_SERVICE_OUTBOUND =
  'GET_BEST_SELLING_PRODUCTS_SERVICE_OUTBOUND';

/**
 * Outbound interface for getting the best selling products in the system.
 *
 * @interface GetBestSellingProductsServiceOutbound
 */
export interface GetBestSellingProductsServiceOutbound {
  /**
   * Get the best-selling products.
   *
   * @param businessId The business id.
   * @param limit The number of products to return.
   * @returns The best-selling products.
   */
  getBestSellingProducts(
    businessId: string,
    limit: number,
  ): Promise<BestSellerEntity[]>;
}
