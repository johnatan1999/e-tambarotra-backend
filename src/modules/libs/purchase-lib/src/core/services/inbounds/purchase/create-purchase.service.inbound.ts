import { CreatePurchaseInput } from '@/purchase-lib/core/models/inputs';
import { PurchaseEntity } from '@/purchase-lib/core/models/entities';

export const CREATE_PURCHASE_SERVICE_INBOUND =
  'CREATE_PURCHASE_SERVICE_INBOUND';

export interface CreatePurchaseServiceInbound {
  /**
   * Service responsible for creating a new purchase in the system.
   *
   * @interface CreatePurchaseServiceInbound
   */
  createPurchase(purchaseInput: CreatePurchaseInput): Promise<PurchaseEntity>;
}
