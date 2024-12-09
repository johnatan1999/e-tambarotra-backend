import { ProductEntity } from '@/inventory-lib/core/model/entities';

export const GET_LATEST_PRODUCTS_SERVICE_OUTBOUND =
  'GET_LATEST_PRODUCTS_SERVICE_OUTBOUND';

export interface GetLatestProductsServiceOutbound {
  /**
   * Gets the latest products for a specific business.
   *
   * @param {number} businessId - The ID of the business.
   * @param {number} limit - The number of products to return.
   * @returns {Promise<ProductEntity[]>} - A promise that resolves to the latest products.
   */
  getLatestProducts(
    businessId: number,
    limit: number,
  ): Promise<ProductEntity[]>;
}
