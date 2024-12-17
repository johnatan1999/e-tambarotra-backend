import { GetSalesStatServiceOutbound } from '@/dashboard-lib/core/services/outbounds';
import { InjectRepository } from '@nestjs/typeorm';
import { ProductsDbEntity } from '@/infrastructure-lib/database/entities';
import { Repository } from 'typeorm';
import { Injectable } from '@nestjs/common';
import { SalesStatEntity } from '@/dashboard-lib/core/models/entities';

@Injectable()
export class GetSalesStatAdapter implements GetSalesStatServiceOutbound {
  constructor(
    @InjectRepository(ProductsDbEntity)
    private readonly salesRepository: Repository<ProductsDbEntity>,
  ) {}

  async getSalesStat(
    businessId: number,
    startDate: Date,
    endDate: Date,
  ): Promise<SalesStatEntity[]> {
    const query = `
        select DATE(order_date)             AS grouped_date,
               sum((quantity * unit_price)) AS total_price
        from orders o
                 join order_items oi on o.id = oi.order_id
        WHERE o.business_id = $1
          AND DATE(o.order_date) BETWEEN $2 AND $3
        GROUP BY DATE(order_date)
        ORDER BY grouped_date
    `;

    const result = await this.salesRepository.query(query, [
      businessId,
      startDate.toISOString().split('T')[0],
      endDate.toISOString().split('T')[0],
    ]);
    return result.map((row) => ({
      date: row.grouped_date,
      total: row.total_price,
    }));
  }
}
