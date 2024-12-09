import { SalesStatEntity } from '@/dashboard-lib/core/models/entities';

export interface GetSalesStatServiceOutbound {
  /**
   * Gets the sales statistics.
   *
   * @param {number} businessId - The ID of the business.
   * @returns {Promise<SalesStatEntity>} - The sales statistics.
   */
  getSalesStat(businessId: number): Promise<SalesStatEntity>;
}
