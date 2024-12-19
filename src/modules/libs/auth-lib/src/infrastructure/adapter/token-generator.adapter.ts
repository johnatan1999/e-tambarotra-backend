import { TokenGeneratorServiceOutbound } from '@/auth-lib/core/services/outbounds';
import { UserTokenData } from '@/auth-lib/core/models/entities';
import * as jwt from 'jsonwebtoken';

export class TokenGeneratorAdapter implements TokenGeneratorServiceOutbound {
  constructor(
    private readonly jwtSecret: string,
    private readonly jwtExpiration: string,
  ) {}

  generateToken(user: UserTokenData): Promise<string> {
    return Promise.resolve(
      jwt.sign(user, this.jwtSecret, {
        expiresIn: this.jwtExpiration,
      }),
    );
  }
}
