import { CustomerEntity } from '@/sales-lib/core/models/entities';

export const GET_CUSTOMERS_BY_BUSINESS_SERVICE_OUTBOUND =
  'GET_CUSTOMERS_BY_BUSINESS_SERVICE_OUTBOUND';

/**
 * Outbound interface for getting customers by business in the system.
 *
 * @interface GetCustomersByBusinessServiceOutbound
 */
export interface GetCustomersByBusinessServiceOutbound {
  /**
   * Gets customers by business.
   *
   * @param {number} businessId - The business id.
   * @returns {Promise<CustomerEntity[]>} - The customers.
   */
  getCustomersByBusiness(businessId: number): Promise<CustomerEntity[]>;
}
