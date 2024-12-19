import { Provider } from '@nestjs/common';
import { CreateProductUseCase } from '@/inventory-lib/core/usecases/products/create-product-use.case';
import { CreateProductAdapter } from '@/inventory-lib/infrastructure/adapter/products/create-product.adapter';
import {
  BULK_INSERT_PRODUCTS_SERVICE_INBOUND,
  CREATE_PRODUCT_SERVICE_INBOUND,
  GET_PRODUCT_BY_ID_SERVICE_INBOUND,
  GET_PRODUCT_SERVICE_INBOUND,
  UPDATE_PRODUCT_SERVICE_INBOUND,
} from '@/inventory-lib/core/services/inbounds/products';
import { GetProductAdapter } from '@/inventory-lib/infrastructure/adapter/products/get-product.adapter';
import { GetProductUseCase } from '@/inventory-lib/core/usecases/products/get-product.usecase';
import {
  GetProductByIdUseCase,
  UpdateProductUseCase,
} from '@/inventory-lib/core/usecases/products';
import {
  BulkInsertProductsAdapter,
  GetProductByIdAdapter,
  UpdateProductAdapter,
} from '@/inventory-lib/infrastructure/adapter/products';
import { BulkInsertProductsUseCase } from '@/inventory-lib/core/usecases/products/bulk-insert-products.usecase';

export const ProductsProviders: Provider[] = [
  {
    inject: [UpdateProductAdapter],
    provide: UPDATE_PRODUCT_SERVICE_INBOUND,
    useFactory: (outbound: UpdateProductAdapter) => {
      return new UpdateProductUseCase(outbound);
    },
  },
  {
    inject: [CreateProductAdapter],
    provide: CREATE_PRODUCT_SERVICE_INBOUND,
    useFactory: (outbound: CreateProductAdapter) => {
      return new CreateProductUseCase(outbound);
    },
  },
  {
    inject: [GetProductAdapter],
    provide: GET_PRODUCT_SERVICE_INBOUND,
    useFactory: (outbound: GetProductAdapter) => {
      return new GetProductUseCase(outbound);
    },
  },
  {
    inject: [GetProductByIdAdapter],
    provide: GET_PRODUCT_BY_ID_SERVICE_INBOUND,
    useFactory: (outbound: GetProductByIdAdapter) => {
      return new GetProductByIdUseCase(outbound);
    },
  },
  {
    inject: [BulkInsertProductsAdapter],
    provide: BULK_INSERT_PRODUCTS_SERVICE_INBOUND,
    useFactory: (outbound: BulkInsertProductsAdapter) => {
      return new BulkInsertProductsUseCase(outbound);
    },
  },
];
