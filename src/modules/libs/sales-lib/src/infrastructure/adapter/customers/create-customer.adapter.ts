import { Injectable } from '@nestjs/common';
import { CustomerInput } from '@/sales-lib/core/models/inputs';
import { CustomerEntity } from '@/sales-lib/core/models/entities';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { CustomerDbEntity } from '@/infrastructure-lib/database/entities';
import { CreateCustomerServiceOutbound } from '@/sales-lib/core/services/outbounds/customers';

@Injectable()
export class CreateCustomerAdapter implements CreateCustomerServiceOutbound {
  constructor(
    @InjectRepository(CustomerDbEntity)
    private readonly repository: Repository<CustomerDbEntity>,
  ) {}

  async createCustomer(
    customerDetails: CustomerInput,
  ): Promise<CustomerEntity> {
    const entity = this.repository.create({
      ...customerDetails,
    });
    return this.repository.save(entity);
  }
}
