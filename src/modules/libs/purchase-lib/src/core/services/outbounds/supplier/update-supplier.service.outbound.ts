import { UpdateSupplierInput } from '@/purchase-lib/core/models/inputs';
import { SupplierEntity } from '@/purchase-lib/core/models/entities';

/**
 * Service outbound for updating a supplier
 *
 * @interface UpdateSupplierServiceInbound
 */
export interface UpdateSupplierServiceOutbound {
  updateSupplier(
    supplierId: number,
    input: UpdateSupplierInput,
  ): Promise<SupplierEntity>;
}
