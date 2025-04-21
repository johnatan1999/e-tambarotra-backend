import { CreateStockAdjustmentService } from '@/inventory-lib/application/services/stock-adjustment';
import { Body, Controller, Inject, Post } from '@nestjs/common';
import { StockAdjustmentInput } from '@/inventory-lib/core/models/inputs';
import { StockAdjustmentEntity } from '@/inventory-lib/core/models/entities';
import { UserAccount } from '../../decorators/user-account.decorator';
import { AccountEntity } from '@/auth-lib/core/models/entities';

@Controller('/products/stock-adjustment')
export class CreateStockAdjustmentController {
  constructor(
    @Inject(CreateStockAdjustmentService)
    private readonly createStockAdjustmentService: CreateStockAdjustmentService,
  ) {}

  @Post()
  async create(
    @Body() input: StockAdjustmentInput,
    @UserAccount() account: AccountEntity,
  ): Promise<StockAdjustmentEntity> {
    return this.createStockAdjustmentService.create(account.id, input);
  }
}
