import { Body, Controller, Inject, Post } from '@nestjs/common';
import { CreateBusinessService } from '@/users-lib/application/services/business/create-business.service';
import { BusinessInput } from '@/users-lib/core/models/inputs';
import { UserAccount } from '../../decorators/user-account.decorator';
import { AccountEntity } from '@/auth-lib/core/models/entities';

@Controller('business')
export class CreateBusinessController {
  constructor(
    @Inject(CreateBusinessService)
    private readonly service: CreateBusinessService,
  ) {}

  @Post()
  async createBusiness(
    @UserAccount() account: AccountEntity,
    @Body() businessDetails: BusinessInput,
  ) {
    return this.service.createBusiness({
      ...businessDetails,
      ownerId: account.id,
    });
  }
}
