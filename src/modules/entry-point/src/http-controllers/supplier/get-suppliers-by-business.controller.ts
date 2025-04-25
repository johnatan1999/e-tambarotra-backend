import { Controller, Get, Inject } from '@nestjs/common';
import { GetSuppliersByBusinessService } from '@/purchase-lib/application/services/supplier';
import { SupplierEntity } from '@/purchase-lib/core/models/entities';
import { UserAccount } from '../../decorators/user-account.decorator';
import { AccountEntity } from '@/auth-lib/core/models/entities';

@Controller('suppliers')
export class GetSuppliersByBusinessController {
  constructor(
    @Inject(GetSuppliersByBusinessService)
    private readonly getSuppliersByBusinessService: GetSuppliersByBusinessService,
  ) {}

  @Get()
  async getSuppliersByBusiness(
    @UserAccount() account: AccountEntity,
  ): Promise<SupplierEntity[]> {
    return this.getSuppliersByBusinessService.getSuppliersByBusiness(account);
  }
}
