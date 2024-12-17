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

export const AuthProvider: Provider[] = [
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
    inject: [
      UserLoginAdapter,
      UserBusinessAdapter,
      PasswordHashAdapter,
      TokenGeneratorAdapter,
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
