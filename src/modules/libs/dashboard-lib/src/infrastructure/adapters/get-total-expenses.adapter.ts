import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { GetTotalExpensesServiceOutbound } from '@/dashboard-lib/core/services/outbounds';
import { ProductsDbEntity } from '@/infrastructure-lib/database/entities';

@Injectable()
export class GetTotalExpensesAdapter
  implements GetTotalExpensesServiceOutbound
{
  constructor(
    @InjectRepository(ProductsDbEntity)
    private readonly repository: Repository<ProductsDbEntity>,
  ) {}

  async getTotalExpenses(businessId: number): Promise<number> {
    const result = await this.repository
      .createQueryBuilder('product')
      .select('SUM(product.purchase_price * product.initial_quantity)', 'total')
      .where('product.business_id = :businessId', { businessId })
      .getRawOne();
    return result.total || 0;
  }
}
