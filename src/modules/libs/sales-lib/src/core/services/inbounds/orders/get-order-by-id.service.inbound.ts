import { OrderEntity } from '@/sales-lib/core/models/entities';

export const GET_ORDER_BY_ID_SERVICE_INBOUND =
  'GET_ORDER_BY_ID_SERVICE_INBOUND';

export interface GetOrderByIdServiceInbound {
  /**
   * Retrieves an order by ID in the system.
   *
   * @param {number} id - The ID of the order to retrieve.
   * @returns {Promise<OrderEntity>} - A promise that resolves to the retrieved order entity.
   */
  getOrderById(id: string): Promise<OrderEntity>;
}
