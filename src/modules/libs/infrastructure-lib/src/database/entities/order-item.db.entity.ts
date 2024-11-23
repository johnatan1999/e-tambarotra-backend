import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { ProductsDbEntity } from './products.db.entity';
import { OrderDbEntity } from './order.db.entity';

@Entity('order_items')
export class OrderItemDbEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @ManyToOne(() => OrderDbEntity, (order) => order.items, { nullable: false })
  @JoinColumn({ name: 'order_id' })
  order: OrderDbEntity;

  @ManyToOne(() => ProductsDbEntity, { nullable: false })
  @JoinColumn({ name: 'product_id' })
  product: ProductsDbEntity;

  @Column({ name: 'quantity', type: 'int' })
  quantity: number;

  @Column({ name: 'unit_price', type: 'decimal', precision: 10, scale: 2 })
  unitPrice: number;

  @Column({ name: 'total_price', type: 'decimal', precision: 10, scale: 2 })
  totalPrice: number;
}
