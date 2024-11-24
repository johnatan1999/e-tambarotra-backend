import { RegistrationOutput } from '@/auth-lib/core/models/output';
import { RegistrationInput } from '@/auth-lib/core/models/inputs';

export const REGISTRATION_SERVICE_OUTBOUND = 'REGISTRATION_SERVICE_OUTBOUND';

/**
 * Outbound interface for registration service.
 *
 * @interface RegistrationServiceOutbound
 */
export interface RegistrationServiceOutbound {
  /**
   * Registers a new user in the system.
   *
   * @param {RegistrationInput} user - The user entity to register.
   * @returns {Promise<RegistrationOutput>} - A promise that resolves to the registered user entity.
   */
  register(user: RegistrationInput): Promise<RegistrationOutput>;
}
