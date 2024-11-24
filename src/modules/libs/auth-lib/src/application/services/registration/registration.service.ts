import { Inject, Injectable } from '@nestjs/common';
import {
  REGISTRATION_SERVICE_INBOUND,
  RegistrationServiceInbound,
} from '@/auth-lib/core/services/inbounds/registration';
import { RegistrationInput } from '@/auth-lib/core/models/inputs';
import { RegistrationOutput } from '@/auth-lib/core/models/output';

@Injectable()
export class RegistrationService {
  constructor(
    @Inject(REGISTRATION_SERVICE_INBOUND)
    private readonly useCase: RegistrationServiceInbound,
  ) {}

  register(input: RegistrationInput): Promise<RegistrationOutput> {
    return this.useCase.register(input);
  }
}
