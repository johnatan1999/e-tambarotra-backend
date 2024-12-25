import { Controller, Get, Inject } from '@nestjs/common';
import { UserAccount } from '../../decorators/user-account.decorator';
import { AccountEntity } from '@/auth-lib/core/models/entities';
import { GetBusinessesByUserService } from '@/users-lib/application/services/business';
import { BusinessEntity } from '@/users-lib/core/models/entities';

@Controller('users/businesses')
export class GetUserBusinessesController {
  constructor(
    @Inject(GetBusinessesByUserService)
    private readonly getUserBusinessesService: GetBusinessesByUserService,
  ) {}

  /**
   * Retrieves the list of businesses associated with the user.
   *
   * @param {AccountEntity} account - The account entity of the user making the request.
   * @returns {Promise<BusinessEntity[]>} - A promise that resolves to an array of businesses.
   */
  @Get()
  getUserBusinesses(
    @UserAccount() account: AccountEntity,
  ): Promise<BusinessEntity[]> {
    return this.getUserBusinessesService.getBusinessesByUser(account.id);
  }
}
