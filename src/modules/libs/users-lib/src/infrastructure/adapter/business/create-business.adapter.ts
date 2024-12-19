import { Injectable } from '@nestjs/common';
import { CreateBusinessServiceOutbound } from '@/users-lib/core/services/outbounds/business';
import { BusinessInput } from '@/users-lib/core/models/inputs/business.input';
import { BusinessEntity } from '@/users-lib/core/models/entities/business.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { BusinessDbEntity } from '@/infrastructure-lib/database/entities';

@Injectable()
export class CreateBusinessAdapter implements CreateBusinessServiceOutbound {
  constructor(
    @InjectRepository(BusinessDbEntity)
    private readonly repository: Repository<BusinessDbEntity>,
  ) {}

  async createBusiness(input: BusinessInput): Promise<BusinessEntity> {
    const businessDbEntity = this.repository.create({
      name: input.name,
      owner: { id: input.ownerId },
      address: input.address,
      email: input.email,
      phone: input.phone,
    });
    return this.repository.save(businessDbEntity);
  }
}
