import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import CustomerProvider from '@/sales-lib/module/clients/customer.provider';
import { CustomerDbEntity } from '@/infrastructure-lib/database/entities';
import { CreateCustomerService } from '@/sales-lib/application/services/customers';
import { CreateCustomerUseCase } from '@/sales-lib/core/usecases/customers';
import { CreateCustomerAdapter } from '@/sales-lib/infrastructure/adapter/customers';

const entities = [CustomerDbEntity];

const services = [CreateCustomerService];

const usecases = [CreateCustomerUseCase];

const adapters = [CreateCustomerAdapter];

@Module({
  imports: [TypeOrmModule.forFeature(entities)],
  providers: [...CustomerProvider, ...services, ...usecases, ...adapters],
  exports: [...services],
})
export class CustomerModule {}
