import { RegistrationServiceInbound } from '@/auth-lib/core/services/inbounds/registration';
import { RegistrationServiceOutbound } from '@/auth-lib/core/services/outbounds/registration';
import { RegistrationOutput } from '@/auth-lib/core/models/output';
import { RegistrationInput } from '@/auth-lib/core/models/inputs';

export class RegistrationUseCase implements RegistrationServiceInbound {
  constructor(private readonly outbound: RegistrationServiceOutbound) {}

  async register(input: RegistrationInput): Promise<RegistrationOutput> {
    return this.outbound.register(input);
  }
}
