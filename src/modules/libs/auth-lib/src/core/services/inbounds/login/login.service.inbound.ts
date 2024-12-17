import { LoginInput } from '@/auth-lib/core/models/inputs';
import { LoginOutput } from '@/auth-lib/core/models/output';

export const LOGIN_SERVICE_INBOUND = 'LOGIN_SERVICE_INBOUND';

export interface LoginServiceInbound {
  /**
   * Registers a new user in the system.
   *
   * @param {LoginInput} input - The input containing user registration details.
   * @returns {Promise<LoginOutput>} A promise that resolves to the registered user entity.
   */
  login(input: LoginInput): Promise<LoginOutput>;
}
