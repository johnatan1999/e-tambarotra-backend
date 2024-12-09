import { BestSellerEntity } from '@/dashboard-lib/core/models/entities';

export const GET_BEST_SELLER_SERVICE_OUTBOUND =
  'GET_BEST_SELLER_SERVICE_OUTBOUND';

/**
 * Outbound interface for getting the best seller in the system.
 *
 * @interface GetBestSellerServiceOutbound
 */
export interface GetBestSellerServiceOutbound {
  /**
   * Gets the best seller for a specific business.
   *
   * @param {number} businessId - The ID of the business.
   * @returns {Promise<BestSellerEntity>} - A promise that resolves to the best seller.
   */
  getBestSeller(businessId: number): Promise<BestSellerEntity>;
}
