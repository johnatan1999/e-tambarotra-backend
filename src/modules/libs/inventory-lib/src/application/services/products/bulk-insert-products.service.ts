import { Inject, Injectable } from '@nestjs/common';
import {
  BULK_INSERT_PRODUCTS_SERVICE_INBOUND,
  BulkInsertProductsServiceInbound,
} from '@/inventory-lib/core/services/inbounds/products';
import { ProductInput } from '@/inventory-lib/core/model/inputs';

@Injectable()
export class BulkInsertProductsService {
  constructor(
    @Inject(BULK_INSERT_PRODUCTS_SERVICE_INBOUND)
    private readonly inbound: BulkInsertProductsServiceInbound,
  ) {}

  async insertProducts(products: ProductInput[]): Promise<void> {
    await this.inbound.createProducts(products);
  }
}
