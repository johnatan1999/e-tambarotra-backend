import { SupplierEntity } from '@/purchase-lib/core/models/entities';
import { UpdateSupplierInput } from '@/purchase-lib/core/models/inputs';

export const UPDATE_SUPPLIER_SERVICE_INBOUND =
  'UPDATE_SUPPLIER_SERVICE_INBOUND';

/**
 * Service inbound for updating a supplier
 *
 * @interface UpdateSupplierServiceInbound
 */
export interface UpdateSupplierServiceInbound {
  updateSupplier(
    supplierId: number,
    input: UpdateSupplierInput,
  ): Promise<SupplierEntity>;
}
