import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import AuthProvider from '@/auth-lib/modules/auth/auth.provider';
import { RegistrationService } from '@/auth-lib/application/services/registration';
import { RegistrationUseCase } from '@/auth-lib/core/usecases/registration';
import { RegistrationAdapter } from '@/auth-lib/infrastructure/adapter/registration';
import {
  BusinessDbEntity,
  UserDbEntity,
} from '@/infrastructure-lib/database/entities';
import { PasswordHashAdapter } from '@/auth-lib/infrastructure/adapter/password-hash.adapter';
import { LoginUseCase } from '@/auth-lib/core/usecases/login';
import {
  UserBusinessAdapter,
  UserLoginAdapter,
} from '@/auth-lib/infrastructure/adapter/login';
import { LoginService } from '@/auth-lib/application/services/login';
import { TokenGeneratorAdapter } from '@/auth-lib/infrastructure/adapter';

const entities = [UserDbEntity, BusinessDbEntity];

const services = [RegistrationService, LoginService];

const useCases = [RegistrationUseCase, LoginUseCase];

const adapters = [
  RegistrationAdapter,
  UserLoginAdapter,
  UserBusinessAdapter,
  PasswordHashAdapter,
  TokenGeneratorAdapter,
];

@Module({
  imports: [TypeOrmModule.forFeature(entities)],
  providers: [...AuthProvider, ...services, ...useCases, ...adapters],
  exports: [...services],
})
export class AuthModule {}
