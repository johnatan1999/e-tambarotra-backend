import { RegistrationServiceInbound } from '@/auth-lib/core/services/inbounds/registration';
import { RegistrationServiceOutbound } from '@/auth-lib/core/services/outbounds/registration';
import { RegistrationOutput } from '@/auth-lib/core/models/output';
import { RegistrationInput } from '@/auth-lib/core/models/inputs';
import { PasswordHashServiceOutbound } from '@/auth-lib/core/services/outbounds/password-hash.service.outbound';

export class RegistrationUseCase implements RegistrationServiceInbound {
  constructor(
    private readonly outbound: RegistrationServiceOutbound,
    private readonly passwordService: PasswordHashServiceOutbound,
  ) {}

  async register(input: RegistrationInput): Promise<RegistrationOutput> {
    const encryptedPassword = await this.passwordService.hashPassword(
      input.password,
    );
    return this.outbound.register({
      ...input,
      password: encryptedPassword,
    });
  }
}
