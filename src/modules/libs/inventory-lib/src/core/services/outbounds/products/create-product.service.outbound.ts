import { ProductInput } from 'modules/libs/inventory-lib/src/core/models/inputs';
import { ProductEntity } from 'modules/libs/inventory-lib/src/core/models/entities';

export interface CreateProductServiceOutbound {
  /**
   * Creates a new products in the system.
   *
   * @param article The information of the products to be created.
   * @returns A promise that resolves to the newly created products.
   */
  createProduct(article: ProductInput): Promise<ProductEntity>;
}
