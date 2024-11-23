import { OrderInput } from '@/sales-lib/core/models/inputs/order.input';
import { OrderEntity } from '@/sales-lib/core/models/entities/order.entity';

export const CREATE_ORDER_SERVICE_INBOUND = 'CREATE_ORDER_SERVICE_INBOUND';

export interface CreateOrderServiceInbound {
  /**
   * Creates a new order in the system.
   *
   * @param orderDetails The details of the order to be created.
   * @returns A promise that resolves to the newly created order entity.
   */
  createOrder(orderDetails: OrderInput): Promise<OrderEntity>;
}
