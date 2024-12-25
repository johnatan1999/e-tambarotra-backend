import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import AuthProvider from '@/auth-lib/modules/auth/auth.provider';
import { RegistrationService } from '@/auth-lib/application/services/registration';
import { RegistrationUseCase } from '@/auth-lib/core/usecases/registration';
import { RegistrationAdapter } from '@/auth-lib/infrastructure/adapter/registration';
import {
  BusinessDbEntity,
  UserDbEntity,
  UserSessionDbEntity,
} from '@/infrastructure-lib/database/entities';
import { PasswordHashAdapter } from '@/auth-lib/infrastructure/adapter/password-hash.adapter';
import { LoginUseCase } from '@/auth-lib/core/usecases/login';
import {
  UserBusinessAdapter,
  UserLoginAdapter,
  UserSessionAdapter,
} from '@/auth-lib/infrastructure/adapter/login';
import { LoginService } from '@/auth-lib/application/services/login';
import { TokenGeneratorAdapter } from '@/auth-lib/infrastructure/adapter';
import { JwtService } from '@nestjs/jwt';
import { AccountAuthUseCase } from '@/auth-lib/core/usecases/account-auth.usecase';
import { AccountAuthService } from '@/auth-lib/application/services/account-auth.service';

const entities = [UserDbEntity, BusinessDbEntity, UserSessionDbEntity];

const services = [RegistrationService, LoginService, AccountAuthService];

const useCases = [RegistrationUseCase, LoginUseCase, AccountAuthUseCase];

const adapters = [
  RegistrationAdapter,
  UserLoginAdapter,
  UserSessionAdapter,
  UserBusinessAdapter,
  PasswordHashAdapter,
  TokenGeneratorAdapter,
  JwtService,
];

@Module({
  imports: [TypeOrmModule.forFeature(entities)],
  providers: [...AuthProvider, ...services, ...useCases, ...adapters],
  exports: [...services],
})
export class AuthModule {}
