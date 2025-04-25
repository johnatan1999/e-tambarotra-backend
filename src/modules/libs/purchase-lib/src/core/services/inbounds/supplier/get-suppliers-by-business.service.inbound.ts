import { SupplierEntity } from '@/purchase-lib/core/models/entities';
import { AccountEntity } from '@/auth-lib/core/models/entities';

export const GET_SUPPLIERS_BY_BUSINESS_SERVICE_INBOUND =
  'GET_SUPPLIERS_BY_BUSINESS_SERVICE_INBOUND';

export interface GetSuppliersByBusinessServiceInbound {
  /**
   * Get suppliers by business id
   * @param {AccountEntity} account - User account
   * @returns {Promise<SupplierEntity[]>} - Array of supplier entities
   */
  getSuppliersByBusiness(account: AccountEntity): Promise<SupplierEntity[]>;
}
