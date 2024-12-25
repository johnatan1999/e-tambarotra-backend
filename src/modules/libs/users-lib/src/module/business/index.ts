import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BusinessDbEntity } from '@/infrastructure-lib/database/entities';
import { businessProvider } from '@/users-lib/module/business/business.provider';
import {
  CreateBusinessService,
  GetBusinessesByUserService,
} from '@/users-lib/application/services/business';
import {
  CreateBusinessUseCase,
  GetBusinessesByUserUseCase,
} from '@/users-lib/core/usecases/business';
import {
  CreateBusinessAdapter,
  GetBusinessesByUserAdapter,
} from '@/users-lib/infrastructure/adapter/business';

const entities = [BusinessDbEntity];

const services = [CreateBusinessService, GetBusinessesByUserService];

const useCases = [CreateBusinessUseCase, GetBusinessesByUserUseCase];

const adapters = [CreateBusinessAdapter, GetBusinessesByUserAdapter];

@Module({
  imports: [TypeOrmModule.forFeature(entities)],
  providers: [...businessProvider, ...services, ...useCases, ...adapters],
  exports: [...services],
})
export class BusinessModule {}
