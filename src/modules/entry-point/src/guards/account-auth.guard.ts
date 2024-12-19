import {
  CanActivate,
  ExecutionContext,
  HttpException,
  HttpStatus,
  Inject,
  Injectable,
} from '@nestjs/common';
import { AccountAuthService } from '@/auth-lib/application/services/account-auth.service';
import { AccountEntity } from '@/auth-lib/core/models/entities';
import { Reflector } from '@nestjs/core';
import { PUBLIC_API_KEY } from '../decorators/public-api.decorator';

@Injectable()
export class AccountAuthGuard implements CanActivate {
  constructor(
    @Inject(AccountAuthService)
    private readonly accountAuthService: AccountAuthService,
    private readonly reflector: Reflector,
  ) {}

  async canActivate(context: ExecutionContext): Promise<boolean> {
    const request = context.switchToHttp().getRequest();

    const isPublicApi = this.reflector.get<boolean>(
      PUBLIC_API_KEY,
      context.getClass(),
    );

    if (isPublicApi) {
      return true;
    }

    const token = this.extractTokenFromHeader(request);

    if (!token) {
      throw new HttpException(
        'Authentication token is missing',
        HttpStatus.UNAUTHORIZED,
      );
    }
    let account: AccountEntity;
    try {
      account = await this.accountAuthService.readAccountFromToken(token);
    } catch (error: unknown) {
      throw new HttpException(
        'Invalid authentication token',
        HttpStatus.UNAUTHORIZED,
      );
    }
    request.account = account;
    return true;
  }

  private extractTokenFromHeader(request: any) {
    const tokenHeader = request.headers.authorization;
    return tokenHeader?.split(' ')[1];
  }
}
