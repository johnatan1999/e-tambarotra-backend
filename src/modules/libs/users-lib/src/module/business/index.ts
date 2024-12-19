import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BusinessDbEntity } from '@/infrastructure-lib/database/entities';
import { businessProvider } from '@/users-lib/module/business/business.provider';
import { CreateBusinessService } from '@/users-lib/application/services/business';
import { CreateBusinessUseCase } from '@/users-lib/core/usecases/business';
import { CreateBusinessAdapter } from '@/users-lib/infrastructure/adapter/business';

const entities = [BusinessDbEntity];

const services = [CreateBusinessService];

const useCases = [CreateBusinessUseCase];

const adapters = [CreateBusinessAdapter];

@Module({
  imports: [TypeOrmModule.forFeature(entities)],
  providers: [...businessProvider, ...services, ...useCases, ...adapters],
  exports: [...services],
})
export class BusinessModule {}
