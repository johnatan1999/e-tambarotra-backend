export const GET_TOTAL_EXPENSES_SERVICE_OUTBOUND =
  'GET_TOTAL_EXPENSES_SERVICE_OUTBOUND';

/**
 * Outbound interface for getting total expenses in the system.
 *
 * @interface GetTotalExpensesServiceOutbound
 */
export interface GetTotalExpensesServiceOutbound {
  /**
   * Gets total expenses.
   *
   * @param {number} businessId - The ID of the business.
   * @returns {Promise<number>} - The total expenses.
   */
  getTotalExpenses(businessId: number): Promise<number>;
}
