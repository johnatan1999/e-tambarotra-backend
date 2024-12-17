import { Injectable } from '@nestjs/common';
import { TokenGeneratorServiceOutbound } from '@/auth-lib/core/services/outbounds';
import { UserTokenData } from '@/auth-lib/core/models/entities';
import * as jwt from 'jsonwebtoken';

@Injectable()
export class TokenGeneratorAdapter implements TokenGeneratorServiceOutbound {
  private readonly jwtSecret: string;
  private readonly jwtExpiration: string;

  constructor() {
    this.jwtSecret = 'process.env.JWT_SECRET';
    this.jwtExpiration = '1d'; //process.env.JWT_EXPIRATION;
  }

  generateToken(user: UserTokenData): Promise<string> {
    return Promise.resolve(
      jwt.sign(user, this.jwtSecret, {
        expiresIn: this.jwtExpiration,
      }),
    );
  }
}
