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
      firstName: customerDetails.firstName,
      lastName: customerDetails.lastName,
      email: customerDetails.email,
      phone: customerDetails.phone,
      address: customerDetails.address,
      business: { id: customerDetails.businessId },
      additionalInformation: customerDetails.description,
      type: customerDetails.type,
      customerBusinessName: customerDetails.businessName,
    });
    return this.repository.save(entity);
  }
}
