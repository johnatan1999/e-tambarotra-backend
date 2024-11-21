import { Provider } from '@nestjs/common';
import { CreateProductUsecase } from '@/inventory-lib/core/usecases/products/create-product.usecase';
import { CreateProductAdapter } from '@/inventory-lib/adapter/products/create-product.adapter';
import { CREATE_ARTICLE_SERVICE_INBOUND } from 'modules/libs/inventory-lib/src/core/services/inbound/products';

export const ArticleProviders: Provider[] = [
  {
    inject: [CreateProductAdapter],
    provide: CREATE_ARTICLE_SERVICE_INBOUND,
    useFactory: (outbound: CreateProductAdapter) => {
      return new CreateProductUsecase(outbound);
    },
  },
];
