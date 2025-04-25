import { AccountEntity } from '@/auth-lib/core/models/entities';
import { UserSessionServiceOutbound } from '@/auth-lib/core/services/outbounds/login';
import { NotFoundException } from '@/core-lib/core/exceptions/not-found.exception';

export const getCurrentBusiness = async (
  account: AccountEntity,
  userSessionService: UserSessionServiceOutbound,
) => {
  const business =
    (await userSessionService.getUserSession(account.id))?.currentBusiness ||
    account.businesses[0];
  if (!business) {
    throw new NotFoundException('Business not found!');
  }
  return business;
};
