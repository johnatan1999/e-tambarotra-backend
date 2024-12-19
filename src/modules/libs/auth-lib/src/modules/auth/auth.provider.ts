import { Provider } from '@nestjs/common';
import { RegistrationAdapter } from '@/auth-lib/infrastructure/adapter/registration';
import { REGISTRATION_SERVICE_INBOUND } from '@/auth-lib/core/services/inbounds/registration';
import { RegistrationUseCase } from '@/auth-lib/core/usecases/registration';
import { PasswordHashAdapter } from '@/auth-lib/infrastructure/adapter/password-hash.adapter';
import { LOGIN_SERVICE_INBOUND } from '@/auth-lib/core/services/inbounds/login';
import {
  UserBusinessAdapter,
  UserLoginAdapter,
} from '@/auth-lib/infrastructure/adapter/login';
import { LoginUseCase } from '@/auth-lib/core/usecases/login/login.usecase';
import { TokenGeneratorAdapter } from '@/auth-lib/infrastructure/adapter';
import { JwtService } from '@nestjs/jwt';
import {
  ACCOUNT_AUTH_SERVICE_OUTBOUND,
  TOKEN_GENERATOR_SERVICE_OUTBOUND,
} from '@/auth-lib/core/services/outbounds';
import { AccountAuthJwt } from '@/auth-lib/infrastructure/adapter/jwt/account-auth.jwt';
import { ACCOUNT_AUTH_SERVICE_INBOUND } from '@/auth-lib/core/services/inbounds/account-auth.service.inbound';
import { AccountAuthUseCase } from '@/auth-lib/core/usecases/account-auth.usecase';
import { ConfigService } from '@nestjs/config';
import { EnvKeys } from '../../../../../../config/config.constant';

export const AuthProvider: Provider[] = [
  {
    inject: [JwtService, ConfigService],
    provide: ACCOUNT_AUTH_SERVICE_OUTBOUND,
    useFactory: (jwtProvider: JwtService, configService: ConfigService) => {
      const jwtSecret = configService.get(EnvKeys.JWT_SECRET);
      return new AccountAuthJwt(jwtProvider, jwtSecret);
    },
  },
  {
    inject: [ACCOUNT_AUTH_SERVICE_OUTBOUND],
    provide: ACCOUNT_AUTH_SERVICE_INBOUND,
    useFactory: (outbound: AccountAuthJwt) => {
      return new AccountAuthUseCase(outbound);
    },
  },
  {
    inject: [RegistrationAdapter, PasswordHashAdapter],
    provide: REGISTRATION_SERVICE_INBOUND,
    useFactory: (
      outbound: RegistrationAdapter,
      passwordService: PasswordHashAdapter,
    ) => {
      return new RegistrationUseCase(outbound, passwordService);
    },
  },
  {
    provide: TOKEN_GENERATOR_SERVICE_OUTBOUND,
    inject: [ConfigService],
    useFactory: (configService: ConfigService) => {
      const jwtSecret = configService.get(EnvKeys.JWT_SECRET);
      const jwtExpiration = configService.get(EnvKeys.JWT_EXPIRATION);
      return new TokenGeneratorAdapter(jwtSecret, jwtExpiration);
    },
  },
  {
    inject: [
      UserLoginAdapter,
      UserBusinessAdapter,
      PasswordHashAdapter,
      TOKEN_GENERATOR_SERVICE_OUTBOUND,
    ],
    provide: LOGIN_SERVICE_INBOUND,
    useFactory: (
      outbound: UserLoginAdapter,
      outboundBusiness: UserBusinessAdapter,
      passwordService: PasswordHashAdapter,
      tokenGenerator: TokenGeneratorAdapter,
    ) => {
      return new LoginUseCase(
        outbound,
        outboundBusiness,
        passwordService,
        tokenGenerator,
      );
    },
  },
];

export default AuthProvider;
