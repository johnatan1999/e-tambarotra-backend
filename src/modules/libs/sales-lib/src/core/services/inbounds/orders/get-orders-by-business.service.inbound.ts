import { OrderEntity } from '@/sales-lib/core/models/entities';

export const GET_ORDERS_BY_BUSINESS_SERVICE_INBOUND =
  'GET_ORDERS_BY_BUSINESS_SERVICE_INBOUND';

/**
 * Inbound interface for getting orders by business in the system.
 *
 * @interface GetOrdersByBusinessServiceInbound
 */
export interface GetOrdersByBusinessServiceInbound {
  /**
   * Get orders by business.
   *
   * @param {string} businessId - The business id.
   * @returns {Promise<OrderEntity[]>} - The orders.
   */
  getOrdersByBusiness(businessId: string): Promise<OrderEntity[]>;
}
