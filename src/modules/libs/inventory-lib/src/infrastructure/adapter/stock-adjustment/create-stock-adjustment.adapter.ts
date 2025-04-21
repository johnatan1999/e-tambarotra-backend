import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateStockAdjustmentServiceOutbound } from '@/inventory-lib/core/services/outbounds/stock-adjustment';
import { StockAdjustmentDbEntity } from '@/infrastructure-lib/database/entities';
import { StockAdjustmentInput } from '@/inventory-lib/core/models/inputs';
import { StockAdjustmentEntity } from '@/inventory-lib/core/models/entities';

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
  ): Promise<StockAdjustmentEntity> {
    const entity = this.repository.create({
      ...input,
      product: { id: input.productId },
      user: { id: userId },
    });
    return this.repository.save(entity);
  }
}
