import { Injectable } from '@nestjs/common';
import { GetBusinessesByUserServiceOutbound } from '@/users-lib/core/services/outbounds/business';
import { BusinessEntity } from '@/users-lib/core/models/entities';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { BusinessDbEntity } from '@/infrastructure-lib/database/entities';

@Injectable()
export class GetBusinessesByUserAdapter
  implements GetBusinessesByUserServiceOutbound
{
  constructor(
    @InjectRepository(BusinessDbEntity)
    private readonly repository: Repository<BusinessDbEntity>,
  ) {}

  getBusinessesByUser(userId: number): Promise<BusinessEntity[]> {
    return this.repository.find({ where: { owner: { id: userId } } });
  }
}
