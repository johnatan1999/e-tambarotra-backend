import { RegistrationInput } from '@/auth-lib/core/models/inputs';
import { RegistrationOutput } from '@/auth-lib/core/models/output';

export const REGISTRATION_SERVICE_INBOUND = 'REGISTRATION_SERVICE_INBOUND';

export interface RegistrationServiceInbound {
  /**
   * Registers a new user in the system.
   *
   * @param {RegistrationInput} input - The input containing user registration details.
   * @returns {Promise<RegistrationOutput>} A promise that resolves to the registered user entity.
   */
  register(input: RegistrationInput): Promise<RegistrationOutput>;
}
