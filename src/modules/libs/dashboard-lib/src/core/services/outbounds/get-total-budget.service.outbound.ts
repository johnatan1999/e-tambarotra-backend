export const GET_BUDGET_SERVICE_OUTBOUND = 'GET_BUDGET_SERVICE_OUTBOUND';

/**
 * Outbound interface for getting the budget in the system.
 *
 * @interface GetTotalBudgetServiceOutbound
 */
export interface GetTotalBudgetServiceOutbound {
  /**
   * Gets the budget for a specific business.
   *
   * @param {number} businessId - The ID of the business.
   * @returns {Promise<number>} - A promise that resolves to the budget amount.
   */
  getTotalBudget(businessId: number): Promise<number>;
}
