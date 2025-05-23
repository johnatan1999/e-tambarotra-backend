import { Inject, Injectable } from '@nestjs/common';
import {
  CREATE_PRODUCT_SERVICE_INBOUND,
  CreateProductServiceInbound,
} from '@/inventory-lib/core/services/inbounds/products';
import { ProductInput } from 'modules/libs/inventory-lib/src/core/models/inputs';
import { CreateProductOutput } from '@/inventory-lib/application/models/output';

@Injectable()
export class CreateProductService {
  constructor(
    @Inject(CREATE_PRODUCT_SERVICE_INBOUND)
    private readonly useCase: CreateProductServiceInbound,
  ) {}

  /**
   * Create a new products in the system.
   *
   * @param article The new products information.
   * @returns The new products.
   */
  createProduct(article: ProductInput): Promise<CreateProductOutput> {
    return this.useCase.createProduct(article);
  }
}
