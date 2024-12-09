import { LatestOrderEntity } from '@/dashboard-lib/core/models/entities';

export const GET_LATEST_ORDERS_SERVICE_OUTBOUND =
  'GET_LATEST_ORDERS_SERVICE_OUTBOUND';

/**
 * Outbound interface for getting the latest orders in the system.
 *
 * @interface GetLatestOrdersServiceOutbound
 */
export interface GetLatestOrdersServiceOutbound {
  /**
   * Gets the latest orders for a specific business.
   *
   * @param {number} businessId - The ID of the business.
   * @param {number} limit - The number of orders to return.
   * @returns {Promise<LatestOrderEntity[]>} - A promise that resolves to the latest orders.
   */
  getLatestOrders(
    businessId: number,
    limit: number,
  ): Promise<LatestOrderEntity[]>;
}
