import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import CustomerProvider from '@/sales-lib/module/clients/customer.provider';
import { CustomerDbEntity } from '@/infrastructure-lib/database/entities';
import {
  CreateCustomerService,
  GetCustomersByBusinessService,
} from '@/sales-lib/application/services/customers';
import {
  CreateCustomerUseCase,
  GetCustomersByBusinessUseCase,
} from '@/sales-lib/core/usecases/customers';
import {
  CreateCustomerAdapter,
  GetCustomersByBusinessAdapter,
} from '@/sales-lib/infrastructure/adapter/customers';

const entities = [CustomerDbEntity];

const services = [CreateCustomerService, GetCustomersByBusinessService];

const useCases = [CreateCustomerUseCase, GetCustomersByBusinessUseCase];

const adapters = [CreateCustomerAdapter, GetCustomersByBusinessAdapter];

@Module({
  imports: [TypeOrmModule.forFeature(entities)],
  providers: [...CustomerProvider, ...services, ...useCases, ...adapters],
  exports: [...services],
})
export class CustomerModule {}
