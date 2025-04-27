import { Controller, Get, Inject, Param } from '@nestjs/common';
import { GetSupplierByIdService } from '@/purchase-lib/application/services/supplier';
import { SupplierEntity } from '@/purchase-lib/core/models/entities';

@Controller('suppliers')
export class GetSupplierByIdController {
  constructor(
    @Inject(GetSupplierByIdService)
    private readonly getSupplierByIdService: GetSupplierByIdService,
  ) {}

  @Get(':id')
  getSupplierById(@Param('id') id: number): Promise<SupplierEntity> {
    return this.getSupplierByIdService.getSupplierById(id);
  }
}
