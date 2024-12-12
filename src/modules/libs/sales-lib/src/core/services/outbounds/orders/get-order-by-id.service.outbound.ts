import { OrderEntity } from '@/sales-lib/core/models/entities/order.entity';

export const GET_ORDER_BY_ID_SERVICE_OUTBOUND =
  'GET_ORDER_BY_ID_SERVICE_OUTBOUND';

/**
 * Outbound interface for getting an order by ID in the system.
 *
 * @interface GetOrderByIdServiceOutbound
 */
export interface GetOrderByIdServiceOutbound {
  /**
   * Gets an order by its ID.
   *
   * @param {string} orderId - The order ID.
   * @returns {Promise<OrderEntity>} - The order.
   */
  getOrderById(orderId: string): Promise<OrderEntity>;
}
