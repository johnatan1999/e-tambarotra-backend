import { Injectable } from '@nestjs/common';
import { UpdateStateServiceOutbound } from '@/core-lib/core/services/outbounds';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { EntityStateEnum } from '@/core-lib/core/models/entities';
import { ProductsDbEntity } from '@/infrastructure-lib/database/entities';

@Injectable()
export class UpdateProductStateAdapter implements UpdateStateServiceOutbound {
  constructor(
    @InjectRepository(ProductsDbEntity)
    private readonly repository: Repository<ProductsDbEntity>,
  ) {}

  async updateState(
    entityId: number,
    state: EntityStateEnum,
  ): Promise<boolean> {
    const product = await this.repository.findOne({ where: { id: entityId } });
    product.state = state;
    const result = await this.repository.save(product);
    return !!result;
  }
}
