import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import {
  OrderDbEntity,
  OrderItemDbEntity,
} from '@/infrastructure-lib/database/entities';
import { Repository } from 'typeorm';
import { UpdateOrderServiceOutbound } from '@/sales-lib/core/services/outbounds/orders';
import { OrderEntity } from '@/sales-lib/core/models/entities';
import { OrderUpdateInput } from '@/sales-lib/core/models/inputs';

@Injectable()
export class UpdateOrderAdapter implements UpdateOrderServiceOutbound {
  constructor(
    @InjectRepository(OrderDbEntity)
    private readonly orderRepository: Repository<OrderDbEntity>,
    @InjectRepository(OrderItemDbEntity)
    private readonly orderItemRepository: Repository<OrderItemDbEntity>,
  ) {}

  async updateOrder(id: string, input: OrderUpdateInput): Promise<OrderEntity> {
    const order = await this.orderRepository.findOne({
      where: { id },
      relations: ['items'],
    });

    if (!order) {
      throw new Error('Order not found');
    }
    if (input.status) {
      order.status = input.status;
    }

    // Step 3: Update, add, or remove items
    const updatedItems: OrderItemDbEntity[] = [];
    for (const itemData of input.items || []) {
      let item = order.items.find((i) => i.id === itemData.id);

      if (item) {
        item.quantity = itemData.quantity;
        item.unitPrice = itemData.unitPrice;
        item.totalPrice = itemData.quantity * itemData.unitPrice;
      } else {
        item = this.orderItemRepository.create({
          order,
          product: { id: itemData.productId },
          quantity: itemData.quantity,
          unitPrice: itemData.unitPrice,
          totalPrice: itemData.quantity * itemData.unitPrice,
        });
      }

      updatedItems.push(item);
    }
    await this.orderItemRepository.save(updatedItems);
    // Remove items that were not included in the update
    const itemsToRemove = order.items.filter(
      (i) => !updatedItems.some((u) => u.id === i.id),
    );

    if (itemsToRemove.length > 0) {
      await this.orderItemRepository.remove(itemsToRemove);
    }

    if (input.orderDate) {
      order.createdAt = new Date(input.orderDate);
    }
    // Step 4: Save the updated order
    order.items = updatedItems;

    return this.orderRepository.save(order);
  }
}
