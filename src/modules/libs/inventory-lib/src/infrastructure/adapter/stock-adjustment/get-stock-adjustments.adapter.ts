import { Injectable } from '@nestjs/common';
import { GetStockAdjustmentsServiceOutbound } from '@/inventory-lib/core/services/outbounds/stock-adjustment';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { StockAdjustmentDbEntity } from '@/infrastructure-lib/database/entities';
import { StockAdjustmentAdapterEntity } from '@/inventory-lib/infrastructure/entities';

@Injectable()
export class GetStockAdjustmentsAdapter
  implements GetStockAdjustmentsServiceOutbound
{
  constructor(
    @InjectRepository(StockAdjustmentDbEntity)
    private readonly stockAdjustmentRepository: Repository<StockAdjustmentDbEntity>,
  ) {}

  getStockAdjustments(
    businessId: number,
    options?: {
      limit?: number;
      offset?: number;
      sortBy?: string;
      sortOrder?: 'ASC' | 'DESC';
    },
  ): Promise<StockAdjustmentAdapterEntity[]> {
    console.log(businessId);
    return this.stockAdjustmentRepository.find({
      relations: ['product', 'product.business'],
      where: {
        product: {
          business: {
            id: businessId,
          },
        },
      },
      order: {
        [options?.sortBy || 'createdAt']: options?.sortOrder || 'DESC',
      },
    });
  }
}
