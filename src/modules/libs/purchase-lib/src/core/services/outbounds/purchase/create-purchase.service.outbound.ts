import { CreatePurchaseInput } from '@/purchase-lib/core/models/inputs';
import { PurchaseEntity } from '@/purchase-lib/core/models/entities';

export interface CreatePurchaseServiceOutbound {
  /**
   * Service responsible for creating a new purchase in the system.
   *
   * @interface CreatePurchaseServiceInbound
   */
  createPurchase(purchaseInput: CreatePurchaseInput): Promise<PurchaseEntity>;
}
