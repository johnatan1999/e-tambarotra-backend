import { Injectable } from '@nestjs/common';
import { GetTotalBudgetServiceOutbound } from '@/dashboard-lib/core/services/outbounds';
import { InjectRepository } from '@nestjs/typeorm';
import { ProductsDbEntity } from '@/infrastructure-lib/database/entities';
import { Repository } from 'typeorm';

@Injectable()
export class GetTotalBudgetAdapter implements GetTotalBudgetServiceOutbound {
  constructor(
    @InjectRepository(ProductsDbEntity)
    private readonly repository: Repository<ProductsDbEntity>,
  ) {}

  async getTotalBudget(businessId: number): Promise<number> {
    const result = await this.repository
      .createQueryBuilder('product')
      .select('SUM(product.purchase_price * product.initial_quantity)', 'total')
      .where('product.business_id = :businessId', { businessId })
      .getRawOne();
    return result.total || 0;
  }
}
