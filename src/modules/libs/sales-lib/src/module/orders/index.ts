import { Module } from '@nestjs/common';
import OrderProvider from '@/sales-lib/module/orders/order.provider';
import {
  OrderDbEntity,
  OrderItemDbEntity,
} from '@/infrastructure-lib/database/entities';
import { TypeOrmModule } from '@nestjs/typeorm';
import {
  CreateOrderService,
  GetOrdersByBusinessService,
} from '@/sales-lib/application/services/orders';
import {
  CreateOrderUsecase,
  GetOrdersByBusinessUseCase,
} from '@/sales-lib/core/usecases/orders';
import { CreateOrderAdapter } from '@/sales-lib/infrastructure/adapter/orders/create-order.adapter';
import { GetOrdersByBusinessAdapter } from '@/sales-lib/infrastructure/adapter/orders';

const entities = [OrderDbEntity, OrderItemDbEntity];

const services = [CreateOrderService, GetOrdersByBusinessService];

const usecases = [CreateOrderUsecase, GetOrdersByBusinessUseCase];

const adapters = [CreateOrderAdapter, GetOrdersByBusinessAdapter];

@Module({
  imports: [TypeOrmModule.forFeature(entities)],
  providers: [...OrderProvider, ...services, ...usecases, ...adapters],
  exports: [...services],
})
export class OrderModule {}
