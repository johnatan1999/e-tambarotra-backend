import {
  createParamDecorator,
  ExecutionContext,
  HttpException,
  HttpStatus,
} from '@nestjs/common';
import { AccountEntity } from '@/auth-lib/core/models/entities';

export const UserAccount = createParamDecorator(
  (_: string, ctx: ExecutionContext): AccountEntity => {
    const request = ctx.switchToHttp().getRequest();
    const account: AccountEntity = request.account as AccountEntity;

    if (!account) {
      throw new HttpException('Account not found', HttpStatus.UNAUTHORIZED);
    }
    return account;
  },
);
