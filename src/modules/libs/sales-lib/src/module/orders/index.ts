import { Module } from '@nestjs/common';
import OrderProvider from '@/sales-lib/module/orders/order.provider';
import {
  OrderDbEntity,
  OrderItemDbEntity,
} from '@/infrastructure-lib/database/entities';
import { TypeOrmModule } from '@nestjs/typeorm';
import {
  CreateOrderService,
  GetOrderByIdService,
  GetOrdersByBusinessService,
  UpdateOrderService,
} from '@/sales-lib/application/services/orders';
import {
  CreateOrderUsecase,
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

const entities = [OrderDbEntity, OrderItemDbEntity];

const services = [
  CreateOrderService,
  GetOrdersByBusinessService,
  GetOrderByIdService,
  UpdateOrderService,
];

const usecases = [
  CreateOrderUsecase,
  GetOrdersByBusinessUseCase,
  GetOrderByIdUseCase,
  UpdateOrderUseCase,
];

const adapters = [
  CreateOrderAdapter,
  GetOrdersByBusinessAdapter,
  GetOrderByIdAdapter,
  UpdateOrderAdapter,
];

@Module({
  imports: [TypeOrmModule.forFeature(entities)],
  providers: [...OrderProvider, ...services, ...usecases, ...adapters],
  exports: [...services],
})
export class OrderModule {}
