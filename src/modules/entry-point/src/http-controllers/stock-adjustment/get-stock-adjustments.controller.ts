import { Controller, Get, Inject } from '@nestjs/common';
import { GetStockAdjustmentsService } from '@/inventory-lib/application/services/stock-adjustment/get-stock-adjustments.service';
import { StockAdjustmentEntity } from '@/inventory-lib/core/models/entities';
import { UserAccount } from '../../decorators/user-account.decorator';
import { AccountEntity } from '@/auth-lib/core/models/entities';
import { ApiExceptionHandler } from '../../decorators';

@Controller('stock-adjustments')
export class GetStockAdjustmentsController {
  constructor(
    @Inject(GetStockAdjustmentsService)
    private readonly getStockAdjustmentsService: GetStockAdjustmentsService,
  ) {}

  @Get()
  @ApiExceptionHandler()
  async getStockAdjustments(
    @UserAccount() account: AccountEntity,
  ): Promise<StockAdjustmentEntity[]> {
    return this.getStockAdjustmentsService.getStockAdjustments(account);
  }
}
