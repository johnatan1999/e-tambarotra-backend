import { Provider } from '@nestjs/common';
import { CreateProductUsecase } from '@/inventory-lib/core/usecases/products/create-product.usecase';
import { CreateProductAdapter } from '@/inventory-lib/infrastructure/adapter/products/create-product.adapter';
import {
  CREATE_ARTICLE_SERVICE_INBOUND,
  GET_ARTICLE_SERVICE_INBOUND,
} from 'modules/libs/inventory-lib/src/core/services/inbound/products';
import { GetProductAdapter } from '@/inventory-lib/infrastructure/adapter/products/get-product.adapter';
import { GetProductUseCase } from '@/inventory-lib/core/usecases/products/get-product.usecase';

export const ProductsProviders: Provider[] = [
  {
    inject: [CreateProductAdapter],
    provide: CREATE_ARTICLE_SERVICE_INBOUND,
    useFactory: (outbound: CreateProductAdapter) => {
      return new CreateProductUsecase(outbound);
    },
  },
  {
    inject: [GetProductAdapter],
    provide: GET_ARTICLE_SERVICE_INBOUND,
    useFactory: (outbound: GetProductAdapter) => {
      return new GetProductUseCase(outbound);
    },
  },
];
