import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SupplierProvider } from '@/purchase-lib/modules/supplier/supplier.provider';
import {
  SupplierDbEntity,
  UserSessionDbEntity,
} from '@/infrastructure-lib/database/entities';
import { CreateSupplierService } from '@/purchase-lib/application/services/supplier';
import { CreateSupplierUseCase } from '@/purchase-lib/core/usecases/supplier';
import { CreateSupplierAdapter } from '@/purchase-lib/infrastructure/adapter/supplier';
import { UserSessionAdapter } from '@/auth-lib/infrastructure/adapter/login';

const entities = [SupplierDbEntity, UserSessionDbEntity];

const services = [CreateSupplierService];

const useCases = [CreateSupplierUseCase];

const adapters = [CreateSupplierAdapter, UserSessionAdapter];

@Module({
  imports: [TypeOrmModule.forFeature(entities)],
  providers: [...SupplierProvider, ...services, ...useCases, ...adapters],
  exports: [...services, ...useCases],
})
export class SupplierModule {}
