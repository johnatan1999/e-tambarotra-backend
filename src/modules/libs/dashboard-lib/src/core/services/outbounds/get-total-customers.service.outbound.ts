export const GET_TOTAL_CUSTOMERS_SERVICE_OUTBOUND =
  'GET_TOTAL_CUSTOMERS_SERVICE_OUTBOUND';

/**
 * Outbound interface for getting total customers in the system.
 *
 * @interface GetTotalCustomersServiceOutbound
 */
export interface GetTotalCustomersServiceOutbound {
  /**
   * Gets total customers.
   *
   * @param {number} businessId - The token to authenticate and authorize the operation.
   * @returns {Promise<number>} - The total customers.
   */
  getTotalCustomers(businessId: number): Promise<number>;
}
