import { AccountAuthServiceOutbound } from '@/auth-lib/core/services/outbounds';
import { Injectable } from '@nestjs/common';
import { AccountEntity } from '@/auth-lib/core/models/entities';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AccountAuthJwt implements AccountAuthServiceOutbound {
  constructor(
    private readonly jwtProvider: JwtService,
    private readonly jwtSecret: string,
  ) {}

  async readAccountFromToken(token: string): Promise<AccountEntity> {
    let payload;
    try {
      payload = await this.jwtProvider.verifyAsync(token, {
        secret: this.jwtSecret,
      });
    } catch (error: unknown) {
      throw error;
    }
    return {
      id: payload.id,
      email: payload.email,
      firstName: payload.firstName,
      lastName: payload.lastName,
      businesses: payload.businesses,
      role: payload.role,
    };
  }
}
