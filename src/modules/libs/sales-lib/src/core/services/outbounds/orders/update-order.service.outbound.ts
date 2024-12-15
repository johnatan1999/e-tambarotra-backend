import { OrderEntity } from '@/sales-lib/core/models/entities';
import { OrderUpdateInput } from '@/sales-lib/core/models/inputs';

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
   * @param {OrderUpdateInput} order - The order entity to update.
   * @returns {Promise<OrderEntity>} - The updated order.
   */
  updateOrder(orderId: string, order: OrderUpdateInput): Promise<OrderEntity>;
}
