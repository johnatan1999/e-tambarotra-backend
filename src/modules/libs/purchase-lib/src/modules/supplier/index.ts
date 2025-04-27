import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SupplierProvider } from '@/purchase-lib/modules/supplier/supplier.provider';
import {
  SupplierDbEntity,
  UserSessionDbEntity,
} from '@/infrastructure-lib/database/entities';
import {
  CreateSupplierService,
  GetSupplierByIdService,
  GetSuppliersByBusinessService,
  UpdateSupplierService,
} from '@/purchase-lib/application/services/supplier';
import {
  CreateSupplierUseCase,
  GetSupplierByIdUseCase,
  UpdateSupplierUseCase,
} from '@/purchase-lib/core/usecases/supplier';
import {
  CreateSupplierAdapter,
  GetSupplierByIdAdapter,
  GetSuppliersByBusinessAdapter,
  UpdateSupplierAdapter,
} from '@/purchase-lib/infrastructure/adapter/supplier';
import { UserSessionAdapter } from '@/auth-lib/infrastructure/adapter/login';
import { GetSuppliersByBusinessUseCase } from '@/purchase-lib/core/usecases/supplier/get-suppliers-by-business.usecase';

const entities = [SupplierDbEntity, UserSessionDbEntity];

const services = [
  CreateSupplierService,
  GetSuppliersByBusinessService,
  GetSupplierByIdService,
  UpdateSupplierService,
];

const useCases = [
  CreateSupplierUseCase,
  GetSuppliersByBusinessUseCase,
  GetSupplierByIdUseCase,
  UpdateSupplierUseCase,
];

const adapters = [
  CreateSupplierAdapter,
  UserSessionAdapter,
  GetSuppliersByBusinessAdapter,
  GetSupplierByIdAdapter,
  UpdateSupplierAdapter,
];

@Module({
  imports: [TypeOrmModule.forFeature(entities)],
  providers: [...SupplierProvider, ...services, ...useCases, ...adapters],
  exports: [...services, ...useCases],
})
export class SupplierModule {}
