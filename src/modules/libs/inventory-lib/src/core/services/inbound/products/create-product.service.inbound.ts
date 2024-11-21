import { ProductInput } from '@/inventory-lib/core/model/inputs';
import { ProductEntity } from '@/inventory-lib/core/model/entities';

export const CREATE_ARTICLE_SERVICE_INBOUND = 'CreateProductServiceInbound';

export interface CreateProductServiceInbound {
  /**
   * Creates a new products in the system.
   *
   * @param article The information of the products to be created.
   * @returns A promise that resolves to the newly created products.
   */
  createProduct(article: ProductInput): Promise<ProductEntity>;
}
