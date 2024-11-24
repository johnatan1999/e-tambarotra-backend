import { Controller, Get, Inject, Param, Res } from '@nestjs/common';
import { GetCustomersByBusinessService } from '@/sales-lib/application/services/customers';
import { GetCustomersByBusinessOutput } from '@/sales-lib/application/models/output';

@Controller('business')
export class GetBusinessCustomersController {
  constructor(
    @Inject(GetCustomersByBusinessService)
    private readonly service: GetCustomersByBusinessService,
  ) {}

  @Get(':businessId/customers')
  async getCustomersByBusiness(
    @Param('businessId') businessId: string,
    @Res() res: any,
  ): Promise<GetCustomersByBusinessOutput> {
    const customers = await this.service.getCustomersByBusiness(businessId);
    return res.status(200).json(customers);
  }
}
