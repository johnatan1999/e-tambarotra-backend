import {
  BadRequestException,
  Controller,
  Get,
  Inject,
  Param,
  Query,
} from '@nestjs/common';
import { GetSalesStatService } from '@/dashboard-lib/application/services';
import { SalesStatOutput } from '@/dashboard-lib/application/models/outputs';

@Controller('dashboard')
export class GetSalesStatController {
  constructor(
    @Inject(GetSalesStatService)
    private readonly service: GetSalesStatService,
  ) {}

  @Get(':businessId/sales-stats')
  async getSalesStat(
    @Param('businessId') businessId: number,
    @Query('dateFrom') dateFrom?: string,
    @Query('dateTo') dateTo?: string,
  ): Promise<SalesStatOutput> {
    const startDate = dateFrom
      ? this.parseDate(dateFrom)
      : this.getFirstDayOfMonth();
    const endDate = dateTo ? this.parseDate(dateTo) : this.getLastDayOfMonth();
    return this.service.getSalesStat(businessId, startDate, endDate);
  }

  private parseDate(dateString: string): Date {
    const date = new Date(dateString);
    if (isNaN(date.getTime())) {
      throw new BadRequestException(`Invalid date format: ${dateString}`);
    }
    return date;
  }

  private getFirstDayOfMonth(): Date {
    const now = new Date();
    return new Date(Date.UTC(now.getFullYear(), now.getMonth(), 1));
  }

  private getLastDayOfMonth(): Date {
    const now = new Date();
    return new Date(Date.UTC(now.getFullYear(), now.getMonth() + 1, 0)); // 0th day of the next month is the last day of the current month
  }
}
