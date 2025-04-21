import { ProductEntity } from 'modules/libs/inventory-lib/src/core/models/entities';

export const GET_PRODUCT_BY_ID_SERVICE_INBOUND =
  'GET_PRODUCT_BY_ID_SERVICE_INBOUND';

export interface GetProductByIdServiceInbound {
  /**
   * Retrieves a product associated with a specific id.
   *
   * @param id - The unique identifier of the product to be retrieved.
   * @returns A promise that resolves to a ProductEntity object.
   */
  getProductById(id: number): Promise<ProductEntity>;
}
