import { Body, Controller, Inject, Param, Put } from '@nestjs/common';
import { UpdateSupplierService } from '@/purchase-lib/application/services/supplier';
import { UpdateSupplierInput } from '@/purchase-lib/core/models/inputs';
import { SupplierEntity } from '@/purchase-lib/core/models/entities';

@Controller('suppliers')
export class UpdateSupplierController {
  constructor(
    @Inject(UpdateSupplierService)
    private readonly updateSupplierService: UpdateSupplierService,
  ) {}

  @Put(':id')
  async updateSupplier(
    @Param('id') id: number,
    @Body() updateSupplierInput: UpdateSupplierInput,
  ): Promise<SupplierEntity> {
    return this.updateSupplierService.updateSupplier(id, updateSupplierInput);
  }
}
