import { Inject, Injectable } from '@nestjs/common';
import {
  LOGIN_SERVICE_INBOUND,
  LoginServiceInbound,
} from '@/auth-lib/core/services/inbounds/login';
import { LoginOutput } from '@/auth-lib/core/models/output';
import { LoginInput } from '@/auth-lib/core/models/inputs';

@Injectable()
export class LoginService {
  constructor(
    @Inject(LOGIN_SERVICE_INBOUND)
    private readonly loginServiceInbound: LoginServiceInbound,
  ) {}

  async login(input: LoginInput): Promise<LoginOutput> {
    return this.loginServiceInbound.login(input);
  }
}
