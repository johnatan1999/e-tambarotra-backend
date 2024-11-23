import { Module } from '@nestjs/common';
import OrderProvider from '@/sales-lib/module/orders/order.provider';
import {
  OrderDbEntity,
  OrderItemDbEntity,
} from '@/infrastructure-lib/database/entities';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CreateOrderService } from '@/sales-lib/application/services/orders';
import { CreateOrderUsecase } from '@/sales-lib/core/usecases/orders';
import { CreateOrderAdapter } from '@/sales-lib/infrastructure/adapter/orders/create-order.adapter';

const entities = [OrderDbEntity, OrderItemDbEntity];

const services = [CreateOrderService];

const usecases = [CreateOrderUsecase];

const adapters = [CreateOrderAdapter];

@Module({
  imports: [TypeOrmModule.forFeature(entities)],
  providers: [...OrderProvider, ...services, ...usecases, ...adapters],
  exports: [...services],
})
export class OrderModule {}
