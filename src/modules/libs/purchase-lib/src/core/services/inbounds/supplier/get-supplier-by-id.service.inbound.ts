import { SupplierEntity } from '@/purchase-lib/core/models/entities';

export const GET_SUPPLIER_BY_ID_SERVICE_INBOUND =
  'GET_SUPPLIER_BY_ID_SERVICE_INBOUND';

/**
 * Service inbound for getting a supplier by id
 *
 * @interface GetSupplierByIdServiceInbound
 */
export interface GetSupplierByIdServiceInbound {
  /**
   * Get a supplier by id
   * @param {number} id - Supplier id
   * @returns {Promise<SupplierEntity | null>} - Supplier entity or null if not found
   */
  getSupplierById(id: number): Promise<SupplierEntity | null>;
}
