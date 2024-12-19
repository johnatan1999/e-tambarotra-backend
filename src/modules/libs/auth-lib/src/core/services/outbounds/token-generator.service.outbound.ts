import { UserTokenData } from '@/auth-lib/core/models/entities/user.entity';

export const TOKEN_GENERATOR_SERVICE_OUTBOUND =
  'TOKEN_GENERATOR_SERVICE_OUTBOUND';

export interface TokenGeneratorServiceOutbound {
  /**
   * Generates a token for the given user.
   *
   * @param {UserTokenData} user - The user data for which the token is to be generated.
   * @returns {Promise<string>} A promise that resolves to the generated token.
   */
  generateToken(user: UserTokenData): Promise<string>;
}
