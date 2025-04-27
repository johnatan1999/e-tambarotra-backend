import { SupplierEntity } from '@/purchase-lib/core/models/entities';

/**
 * Service inbound for getting a supplier by id
 *
 * @interface GetSupplierByIdServiceInbound
 */
export interface GetSupplierByIdServiceOutbound {
  /**
   * Get a supplier by id
   * @param {number} id - Supplier id
   * @returns {Promise<SupplierEntity | null>} - Supplier entity or null if not found
   */
  getSupplierById(id: number): Promise<SupplierEntity | null>;
}
