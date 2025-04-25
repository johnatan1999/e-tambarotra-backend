import { CreateSupplierInput } from '@/purchase-lib/core/models/inputs';
import { SupplierEntity } from '@/purchase-lib/core/models/entities';
import { AccountEntity } from '@/auth-lib/core/models/entities';

export const CREATE_SUPPLIER_SERVICE_INBOUND =
  'CREATE_SUPPLIER_SERVICE_INBOUND';

/**
 * Service inbound for creating a supplier
 *
 * @interface CreateSupplierServiceInbound
 */
export interface CreateSupplierServiceInbound {
  /**
   * Creates a new supplier
   * @param account
   * @param {CreateSupplierInput} input - The input for creating a supplier
   * @returns {Promise<SupplierEntity>} - The created supplier
   */
  createSupplier(
    account: AccountEntity,
    input: CreateSupplierInput,
  ): Promise<SupplierEntity>;
}
