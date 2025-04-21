import { ProductEntity } from 'modules/libs/inventory-lib/src/core/models/entities';

export const GET_PRODUCT_SERVICE_INBOUND = 'GET_ARTICLE_SERVICE_INBOUND';

export interface GetProductServiceInbound {
  /**
   * Retrieves a list of products associated with a specific business.
   *
   * @param businessId - The unique identifier of the business whose products are to be retrieved.
   * @returns A promise that resolves to an array of ProductEntity objects.
   */
  getProductsByBusiness(businessId: number): Promise<ProductEntity[]>;
}
