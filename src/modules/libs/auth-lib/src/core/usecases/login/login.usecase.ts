import { LoginInput } from '@/auth-lib/core/models/inputs';
import { LoginOutput } from '@/auth-lib/core/models/output';
import { LoginServiceInbound } from '@/auth-lib/core/services/inbounds/login';
import {
  LoginServiceOutbound,
  UserBusinessServiceOutbound,
} from '@/auth-lib/core/services/outbounds/login';
import { PasswordHashServiceOutbound } from '@/auth-lib/core/services/outbounds/password-hash.service.outbound';
import { AuthException } from '@/core-lib/core/exceptions';
import { TokenGeneratorServiceOutbound } from '@/auth-lib/core/services/outbounds';

export class LoginUseCase implements LoginServiceInbound {
  constructor(
    private readonly outbound: LoginServiceOutbound,
    private readonly businessService: UserBusinessServiceOutbound,
    private readonly passwordService: PasswordHashServiceOutbound,
    private readonly tokenGenerator: TokenGeneratorServiceOutbound,
  ) {}

  async login(input: LoginInput): Promise<LoginOutput> {
    const user = await this.outbound.getUserByEmail(input.email);
    if (!user) {
      throw new AuthException('User not found');
    }
    const isPasswordValid = await this.passwordService.comparePassword(
      input.password,
      user.password,
    );
    if (!isPasswordValid) {
      throw new AuthException('Invalid password');
    }
    const businesses = await this.businessService.getUserBusinesses(user.id);
    const token = await this.tokenGenerator.generateToken({
      id: user.id,
      email: user.email,
      firstName: user.firstName,
      lastName: user.lastName,
      role: user.role,
      businesses,
    });
    return {
      email: user.email,
      firstName: user.firstName,
      lastName: user.lastName,
      username: user.username,
      role: user.role,
      token,
    };
  }
}
