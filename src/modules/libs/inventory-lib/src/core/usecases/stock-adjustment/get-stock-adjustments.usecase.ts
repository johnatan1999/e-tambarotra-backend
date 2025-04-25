import { GetStockAdjustmentsServiceInbound } from '@/inventory-lib/core/services/inbounds/stock-adjustment';
import { GetStockAdjustmentsServiceOutbound } from '@/inventory-lib/core/services/outbounds/stock-adjustment';
import { StockAdjustmentEntity } from '@/inventory-lib/core/models/entities';
import { UserSessionServiceOutbound } from '@/auth-lib/core/services/outbounds/login';
import { AccountEntity } from '@/auth-lib/core/models/entities';
import { NotFoundException } from '@/core-lib/core/exceptions/not-found.exception';

export class GetStockAdjustmentsUseCase
  implements GetStockAdjustmentsServiceInbound
{
  constructor(
    private readonly getStockAdjustmentsService: GetStockAdjustmentsServiceOutbound,
    private readonly userSessionOutbound: UserSessionServiceOutbound,
  ) {}

  async getStockAdjustments(
    account: AccountEntity,
    options?: {
      limit?: number;
      offset?: number;
      sortBy?: string;
      sortOrder?: 'ASC' | 'DESC';
    },
  ): Promise<StockAdjustmentEntity[]> {
    const business =
      (await this.userSessionOutbound.getUserSession(account.id)) ||
      account.businesses[0];
    if (!business) {
      throw new NotFoundException('Business not found!');
    }
    const result = await this.getStockAdjustmentsService.getStockAdjustments(
      business.id,
      options,
    );
    return result.map((row) => ({
      id: row.id,
      product: { id: row.product.id, name: row.product.name },
      adjustedQuantity: row.adjustedQuantity,
      newQuantity: row.newQuantity,
      adjustedUnitPrice: row.adjustedUnitPrice,
      type: row.type,
      reason: row.reason,
      createdBy: `${row.user.firstName} ${row.user.lastName}`,
      createdAt: row.createdAt,
      updatedAt: row.updatedAt,
    }));
  }
}
