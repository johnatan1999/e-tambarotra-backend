import { Inject, Injectable } from '@nestjs/common';
import { GetProductOutput } from '@/inventory-lib/application/models/output/get-product.output';
import {
  GET_ARTICLE_SERVICE_INBOUND,
  GetProductServiceInbound,
} from '@/inventory-lib/core/services/inbound/products';

@Injectable()
export class GetProductService {
  constructor(
    @Inject(GET_ARTICLE_SERVICE_INBOUND)
    private readonly useCase: GetProductServiceInbound,
  ) {}

  getProductsByBusiness(businessId: number): Promise<GetProductOutput> {
    return this.useCase.getProductsByBusiness(businessId);
  }
}
