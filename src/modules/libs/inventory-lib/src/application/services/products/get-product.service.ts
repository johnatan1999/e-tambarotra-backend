import { Inject, Injectable } from '@nestjs/common';
import { GetProductOutput } from '@/inventory-lib/application/models/output/get-product.output';
import {
  GET_PRODUCT_SERVICE_INBOUND,
  GetProductServiceInbound,
} from '@/inventory-lib/core/services/inbounds/products';

@Injectable()
export class GetProductService {
  constructor(
    @Inject(GET_PRODUCT_SERVICE_INBOUND)
    private readonly useCase: GetProductServiceInbound,
  ) {}

  getProductsByBusiness(businessId: number): Promise<GetProductOutput> {
    return this.useCase.getProductsByBusiness(businessId);
  }
}
