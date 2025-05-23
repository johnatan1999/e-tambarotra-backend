import { Inject, Injectable } from '@nestjs/common';
import { ProductEntity } from 'modules/libs/inventory-lib/src/core/models/entities';
import {
  GET_PRODUCT_BY_ID_SERVICE_INBOUND,
  GetProductByIdServiceInbound,
} from '@/inventory-lib/core/services/inbounds/products/get-product-by-id.service.inbound';

@Injectable()
export class GetProductByIdService {
  constructor(
    @Inject(GET_PRODUCT_BY_ID_SERVICE_INBOUND)
    private readonly useCase: GetProductByIdServiceInbound,
  ) {}

  async getProductById(productId: number): Promise<ProductEntity> {
    return this.useCase.getProductById(productId);
  }
}
