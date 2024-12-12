import { OrderInput } from '@/sales-lib/core/models/inputs/order.input';
import { OrderEntity } from '@/sales-lib/core/models/entities/order.entity';

export const UPDATE_ORDER_SERVICE_INBOUND = 'UPDATE_ORDER_SERVICE_INBOUND';

/**
 * Inbound interface for updating orders in the system.
 *
 * @interface UpdateOrderServiceInbound
 */
export interface UpdateOrderServiceInbound {
  /**
   * Updates an existing order in the system.
   *
   * @param {number} orderId - The ID of the order to update.
   * @param {OrderInput} orderData - The new order data.
   * @returns {Promise<OrderEntity>} - A promise that resolves to the updated order entity.
   */
  updateOrder(orderId: string, orderData: OrderInput): Promise<OrderEntity>;
}
