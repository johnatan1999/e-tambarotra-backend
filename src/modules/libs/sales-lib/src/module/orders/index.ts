import { Module } from '@nestjs/common';
import OrderProvider from '@/sales-lib/module/orders/order.provider';
import {
  OrderDbEntity,
  OrderItemDbEntity,
  ProductsDbEntity,
} from '@/infrastructure-lib/database/entities';
import { TypeOrmModule } from '@nestjs/typeorm';
import {
  CreateOrderService,
  GetOrderByIdService,
  GetOrdersByBusinessService,
  UpdateOrderService,
} from '@/sales-lib/application/services/orders';
import {
  CreateOrderUseCase,
  GetOrderByIdUseCase,
  GetOrdersByBusinessUseCase,
  UpdateOrderUseCase,
} from '@/sales-lib/core/usecases/orders';
import { CreateOrderAdapter } from '@/sales-lib/infrastructure/adapter/orders/create-order.adapter';
import {
  GetOrderByIdAdapter,
  GetOrdersByBusinessAdapter,
  UpdateOrderAdapter,
} from '@/sales-lib/infrastructure/adapter/orders';
import {
  ProductQuantityValidatorService,
  ProductValidatorService,
} from '@/core-lib/infrastructure/adapter/product';
import { UpdateProductStockAdapter } from '@/sales-lib/infrastructure/adapter/products';

const entities = [ProductsDbEntity, OrderDbEntity, OrderItemDbEntity];

const services = [
  CreateOrderService,
  GetOrdersByBusinessService,
  GetOrderByIdService,
  UpdateOrderService,
];

const useCases = [
  CreateOrderUseCase,
  GetOrdersByBusinessUseCase,
  GetOrderByIdUseCase,
  UpdateOrderUseCase,
];

const adapters = [
  CreateOrderAdapter,
  GetOrdersByBusinessAdapter,
  GetOrderByIdAdapter,
  UpdateOrderAdapter,
  UpdateProductStockAdapter,
];

const validators = [ProductValidatorService, ProductQuantityValidatorService];

@Module({
  imports: [TypeOrmModule.forFeature(entities)],
  providers: [
    ...OrderProvider,
    ...services,
    ...useCases,
    ...adapters,
    ...validators,
  ],
  exports: [...services],
})
export class OrderModule {}
