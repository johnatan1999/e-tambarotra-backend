import { ProductEntity } from '@/inventory-lib/core/model/entities';

export const GET_ARTICLE_SERVICE_OUTBOUND = 'GET_ARTICLE_SERVICE_OUTBOUND';

export interface GetProductServiceOutbound {
  /**
   * Retrieves a list of products associated with a specific business.
   *
   * @param businessId - The unique identifier of the business whose products are to be retrieved.
   * @returns A promise that resolves to an array of ProductEntity objects.
   */
  getProductsByBusiness(businessId: number): Promise<ProductEntity[]>;
}
