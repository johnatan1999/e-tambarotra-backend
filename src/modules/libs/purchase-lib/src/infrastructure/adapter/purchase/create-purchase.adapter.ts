import { Injectable } from '@nestjs/common';
import { CreatePurchaseServiceOutbound } from '@/purchase-lib/core/services/outbounds/purchase';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { PurchaseDbEntity } from '@/infrastructure-lib/database/entities';
import { CreatePurchaseInput } from '@/purchase-lib/core/models/inputs';
import { PurchaseEntity } from '@/purchase-lib/core/models/entities';

@Injectable()
export class CreatePurchaseAdapter implements CreatePurchaseServiceOutbound {
  constructor(
    @InjectRepository(PurchaseDbEntity)
    private readonly purchaseRepository: Repository<PurchaseDbEntity>,
  ) {}

  async createPurchase(
    createPurchaseInput: CreatePurchaseInput,
  ): Promise<PurchaseEntity> {
    const purchaseDbEntity = this.purchaseRepository.create({
      ...createPurchaseInput,
      product: { id: createPurchaseInput.productId },
    });
    const savedPurchase = await this.purchaseRepository.save(purchaseDbEntity);
    return {
      id: savedPurchase.id,
      productId: createPurchaseInput.productId,
      quantity: savedPurchase.quantity,
      unitPrice: savedPurchase.unitPrice,
      purchaseDate: savedPurchase.purchaseDate,
    };
  }
}
