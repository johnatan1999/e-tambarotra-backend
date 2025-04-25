import { Body, Controller, Inject, Post } from '@nestjs/common';
import { CreateSupplierService } from '@/purchase-lib/application/services/supplier';
import { CreateSupplierInput } from '@/purchase-lib/core/models/inputs';
import { SupplierEntity } from '@/purchase-lib/core/models/entities';
import { AccountEntity } from '@/auth-lib/core/models/entities';
import { UserAccount } from '../../decorators/user-account.decorator';

@Controller('suppliers')
export class CreateSupplierController {
  constructor(
    @Inject(CreateSupplierService)
    private readonly createSupplierService: CreateSupplierService,
  ) {}

  @Post()
  async create(
    @Body() input: CreateSupplierInput,
    @UserAccount() account: AccountEntity,
  ): Promise<SupplierEntity> {
    return this.createSupplierService.createSupplier(account, input);
  }
}
