import { CustomerEntity } from '@/sales-lib/core/models/entities';

export const GET_CUSTOMERS_BY_BUSINESS_SERVICE_INBOUND =
  'GET_CUSTOMERS_BY_BUSINESS_SERVICE_INBOUND';

/**
 * Inbound interface for getting customers by business in the system.
 *
 * @interface GetCustomersByBusinessServiceInbound
 */
export interface GetCustomersByBusinessServiceInbound {
  /**
   * Gets customers by business.
   *
   * @param {string} businessId - The business id.
   * @returns {Promise<CustomerEntity[]>} - The customers.
   */
  getCustomersByBusiness(businessId: string): Promise<CustomerEntity[]>;
}
