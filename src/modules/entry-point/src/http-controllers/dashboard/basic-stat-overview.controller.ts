import {
  Controller,
  Get,
  HttpStatus,
  Inject,
  Param,
  Res,
} from '@nestjs/common';
import { GetBasicStatOverviewService } from '@/dashboard-lib/application/services';
import { BasicStatOverviewEntity } from '@/dashboard-lib/core/models/entities';

@Controller('dashboard')
export class BasicStatOverviewController {
  constructor(
    @Inject(GetBasicStatOverviewService)
    private readonly service: GetBasicStatOverviewService,
  ) {}

  @Get('/:businessId/basic-stat-overview')
  async getBasicStatOverview(
    @Res() res: any,
    @Param('businessId') businessId: number,
  ): Promise<BasicStatOverviewEntity> {
    const result = await this.service.getBasicStatOverview(businessId);
    return res.status(HttpStatus.OK).json(result);
  }
}
