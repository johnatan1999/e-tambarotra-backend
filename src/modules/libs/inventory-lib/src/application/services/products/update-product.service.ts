import { Inject, Injectable } from '@nestjs/common';
import {
  UPDATE_PRODUCT_SERVICE_INBOUND,
  UpdateProductServiceInbound,
} from '@/inventory-lib/core/services/inbounds/products';
import { UpdateProductOutput } from '@/inventory-lib/application/models/output';
import { ProductInput } from '@/inventory-lib/core/model/inputs';

@Injectable()
export class UpdateProductService {
  constructor(
    @Inject(UPDATE_PRODUCT_SERVICE_INBOUND)
    private readonly useCase: UpdateProductServiceInbound,
  ) {}

  updateProduct(
    id: string,
    product: ProductInput,
  ): Promise<UpdateProductOutput> {
    return this.useCase.updateProduct(id, product);
  }
}
