import { OrderEntity } from '@/sales-lib/core/models/entities/order.entity';

/**
 * Outbound interface for creating a new order in the system.
 *
 * @interface CreateOrderServiceOutbound
 */
export interface CreateOrderServiceOutbound {
  /**
   * Creates a new order in the system.
   *
   * @param orderDetails The details of the order to be created.
   * @returns A promise that resolves to the newly created order entity.
   */
  createOrder(orderDetails: OrderEntity): Promise<OrderEntity>;
}
