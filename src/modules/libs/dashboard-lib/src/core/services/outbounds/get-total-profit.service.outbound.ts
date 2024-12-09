/**
 * Outbound interface for getting total profit in the system.
 *
 * @interface GetTotalProfitServiceOutbound
 */
export const GET_TOTAL_PROFIT_SERVICE_OUTBOUND =
  'GET_TOTAL_PROFIT_SERVICE_OUTBOUND';

export interface GetTotalProfitServiceOutbound {
  /**
   * Gets total profit.
   *
   * @param {number} businessId - The ID of the business.
   * @returns {Promise<number>} The total profit.
   */
  getTotalProfit(businessId: number): Promise<number>;
}
