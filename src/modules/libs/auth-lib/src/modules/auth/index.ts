import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import AuthProvider from '@/auth-lib/modules/auth/auth.provider';
import { RegistrationService } from '@/auth-lib/application/services/registration';
import { RegistrationUseCase } from '@/auth-lib/core/usecases/registration';
import { RegistrationAdapter } from '@/auth-lib/infrastructure/adapter/registration';
import { UserDbEntity } from '@/infrastructure-lib/database/entities';

const entities = [UserDbEntity];

const services = [RegistrationService];

const useCases = [RegistrationUseCase];

const adapters = [RegistrationAdapter];

@Module({
  imports: [TypeOrmModule.forFeature(entities)],
  providers: [...AuthProvider, ...services, ...useCases, ...adapters],
  exports: [...services],
})
export class AuthModule {}
