import { CreateSupplierInput } from '@/purchase-lib/core/models/inputs';
import { SupplierEntity } from '@/purchase-lib/core/models/entities';

/**
 * Service inbound for creating a supplier
 *
 * @interface CreateSupplierServiceOutbound
 */
export interface CreateSupplierServiceOutbound {
  /**
   * Creates a new supplier
   *
   * @param userId
   * @param businessId
   * @param {CreateSupplierInput} input - The input for creating a supplier
   * @returns {Promise<SupplierEntity>} - The created supplier
   */
  createSupplier(
    userId: number,
    businessId: number,
    input: CreateSupplierInput,
  ): Promise<SupplierEntity>;
}
