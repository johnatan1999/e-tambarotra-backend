import { OrderEntity } from '@/sales-lib/core/models/entities/order.entity';

export const GET_ORDERS_BY_BUSINESS_SERVICE_OUTBOUND =
  'GET_ORDERS_BY_BUSINESS_SERVICE_OUTBOUND';

/**
 * Outbound interface for getting orders by business in the system.
 *
 * @interface GetOrdersByBusinessServiceOutbound
 */
export interface GetOrdersByBusinessServiceOutbound {
  /**
   * Gets orders by business.
   *
   * @param {string} businessId - The business id.
   * @returns {Promise<OrderEntity[]>} - The orders.
   */
  getOrdersByBusiness(businessId: number): Promise<OrderEntity[]>;
}
