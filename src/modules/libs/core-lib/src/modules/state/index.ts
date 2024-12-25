import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProductsDbEntity } from '@/infrastructure-lib/database/entities';
import { UpdateStateUseCase } from '@/core-lib/core/usecases';
import { UpdateProductStateAdapter } from '@/core-lib/infrastructure/adapter/state';
import { stateProvider } from '@/core-lib/modules/state/state.provider';
import { UpdateStateService } from '@/core-lib/core/application/services/state';

const entities = [ProductsDbEntity];
const adapters = [UpdateProductStateAdapter];
const useCases = [UpdateStateUseCase];
const services = [UpdateStateService];

@Module({
  imports: [TypeOrmModule.forFeature(entities)],
  providers: [...stateProvider, ...useCases, ...adapters, ...services],
  exports: [...services],
})
export class StateModule {}
