import { SupplierEntity } from '@/purchase-lib/core/models/entities';

export interface GetSuppliersByBusinessServiceOutbound {
  /**
   * Get suppliers by business id
   * @param {number} businessId - Business id
   * @returns {Promise<SupplierEntity[]>} - Array of supplier entities
   */
  getSuppliersByBusiness(businessId: number): Promise<SupplierEntity[]>;
}
