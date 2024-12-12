import { OrderInput } from '@/sales-lib/core/models/inputs';
import { OrderEntity } from '@/sales-lib/core/models/entities';

/**
 * Outbound interface for updating an order in the system.
 *
 * @interface UpdateOrderServiceOutbound
 */
export interface UpdateOrderServiceOutbound {
  /**
   * Updates an order.
   *
   * @param {string} orderId - The order id.
   * @param {OrderInput} order - The order entity to update.
   * @returns {Promise<OrderEntity>} - The updated order.
   */
  updateOrder(orderId: string, order: OrderInput): Promise<OrderEntity>;
}
