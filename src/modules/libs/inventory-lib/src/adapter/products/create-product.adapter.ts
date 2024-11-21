import { CreateProductServiceOutbound } from 'modules/libs/inventory-lib/src/core/services/outbound/products';
import { ProductInput } from '@/inventory-lib/core/model/inputs';
import { ProductEntity } from '@/inventory-lib/core/model/entities';
import { Injectable } from '@nestjs/common';

@Injectable()
export class CreateProductAdapter implements CreateProductServiceOutbound {
  createArticle(article: ProductInput): Promise<ProductEntity> {
    return Promise.resolve(undefined);
  }
}
