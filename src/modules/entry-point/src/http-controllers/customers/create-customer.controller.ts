import { Body, Controller, Inject, Post } from '@nestjs/common';
import { CustomerInput } from '@/sales-lib/core/models/inputs';
import { CustomerEntity } from '@/sales-lib/core/models/entities';
import { CreateCustomerService } from '@/sales-lib/application/services/customers';

@Controller('customers')
export class CreateCustomerController {
  constructor(
    @Inject(CreateCustomerService)
    private readonly service: CreateCustomerService,
  ) {}

  @Post()
  async createCustomer(
    @Body() customerDetails: CustomerInput,
  ): Promise<CustomerEntity> {
    return this.service.createCustomer(customerDetails);
  }
}
