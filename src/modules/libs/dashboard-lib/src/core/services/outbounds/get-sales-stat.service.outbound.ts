import { SalesStatEntity } from '@/dashboard-lib/core/models/entities';

export const GET_SALES_STAT_SERVICE_OUTBOUND =
  'GET_SALES_STAT_SERVICE_OUTBOUND';

export interface GetSalesStatServiceOutbound {
  /**
   * Gets the sales statistics.
   *
   * @param {number} businessId - The ID of the business.
   * @param startDate
   * @param endDate
   * @returns {Promise<SalesStatEntity>} - The sales statistics.
   */
  getSalesStat(
    businessId: number,
    startDate: Date,
    endDate: Date,
  ): Promise<SalesStatEntity[]>;
}
