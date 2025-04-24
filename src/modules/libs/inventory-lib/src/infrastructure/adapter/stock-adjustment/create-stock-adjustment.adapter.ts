import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateStockAdjustmentServiceOutbound } from '@/inventory-lib/core/services/outbounds/stock-adjustment';
import { StockAdjustmentDbEntity } from '@/infrastructure-lib/database/entities';
import { StockAdjustmentInput } from '@/inventory-lib/core/models/inputs';
import { StockAdjustmentAdapterEntity } from '@/inventory-lib/infrastructure/entities';

@Injectable()
export class CreateStockAdjustmentAdapter
  implements CreateStockAdjustmentServiceOutbound
{
  constructor(
    @InjectRepository(StockAdjustmentDbEntity)
    private readonly repository: Repository<StockAdjustmentDbEntity>,
  ) {}

  create(
    userId: number,
    input: StockAdjustmentInput,
  ): Promise<StockAdjustmentAdapterEntity> {
    const entity = this.repository.create({
      ...input,
      product: { id: input.productId },
      user: { id: userId },
    });
    return this.repository.save(entity);
  }
}
