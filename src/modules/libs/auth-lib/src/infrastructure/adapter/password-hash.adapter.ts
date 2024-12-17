import { Injectable } from '@nestjs/common';
import { PasswordHashServiceOutbound } from '@/auth-lib/core/services/outbounds/password-hash.service.outbound';
import * as bcrypt from 'bcryptjs';

@Injectable()
export class PasswordHashAdapter implements PasswordHashServiceOutbound {
  constructor() {}

  async hashPassword(password: string): Promise<string> {
    const salt = await bcrypt.genSalt(10); // Salt rounds
    return bcrypt.hash(password, salt);
  }

  async comparePassword(
    plainPassword: string,
    hashedPassword: string,
  ): Promise<boolean> {
    return await bcrypt.compare(plainPassword, hashedPassword);
  }
}
