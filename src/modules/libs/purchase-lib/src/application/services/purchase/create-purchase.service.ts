import { Inject, Injectable } from '@nestjs/common';
import {
  CREATE_PURCHASE_SERVICE_INBOUND,
  CreatePurchaseServiceInbound,
} from '@/purchase-lib/core/services/inbounds/purchase';
import { PurchaseEntity } from '@/purchase-lib/core/models/entities';
import { CreatePurchaseInput } from '@/purchase-lib/core/models/inputs';

@Injectable()
export class CreatePurchaseService {
  constructor(
    @Inject(CREATE_PURCHASE_SERVICE_INBOUND)
    private readonly createPurchaseServiceInbound: CreatePurchaseServiceInbound,
  ) {}

  async createPurchase(
    purchaseInput: CreatePurchaseInput,
  ): Promise<PurchaseEntity> {
    return this.createPurchaseServiceInbound.createPurchase(purchaseInput);
  }
}
