import { Provider } from '@nestjs/common';
import { RegistrationAdapter } from '@/auth-lib/infrastructure/adapter/registration';
import { REGISTRATION_SERVICE_INBOUND } from '@/auth-lib/core/services/inbounds/registration';
import { RegistrationUseCase } from '@/auth-lib/core/usecases/registration';

export const AuthProvider: Provider[] = [
  {
    inject: [RegistrationAdapter],
    provide: REGISTRATION_SERVICE_INBOUND,
    useFactory: (outbound: RegistrationAdapter) => {
      return new RegistrationUseCase(outbound);
    },
  },
];

export default AuthProvider;
