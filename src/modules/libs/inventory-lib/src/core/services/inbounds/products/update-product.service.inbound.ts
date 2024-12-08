import { ProductInput } from '@/inventory-lib/core/model/inputs';
import { ProductEntity } from '@/inventory-lib/core/model/entities';

export const UPDATE_PRODUCT_SERVICE_INBOUND = 'UPDATE_PRODUCT_SERVICE_INBOUND';

/**
 * Inbound interface for updating a product in the system.
 *
 * @interface UpdateProductServiceInbound
 */
export interface UpdateProductServiceInbound {
  /**
   * Updates a product in the system.
   *
   * @param id The id of the product to be updated.
   * @param product The information of the product to be updated.
   * @returns A promise that resolves to the updated product.
   */
  updateProduct(id: string, product: ProductInput): Promise<ProductEntity>;
}
