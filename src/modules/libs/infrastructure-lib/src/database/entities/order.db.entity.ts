import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { BusinessDbEntity } from './business.db.entity';
import { OrderItemDbEntity } from './order-item.db.entity';
import { CustomerDbEntity } from '@/infrastructure-lib/database/entities/customer.db.entity';

@Entity('orders')
export class OrderDbEntity {
  @PrimaryGeneratedColumn()
  id: string;

  @ManyToOne(() => CustomerDbEntity, (customer) => customer.orders, {
    nullable: false,
  })
  @JoinColumn({ name: 'customer_id' })
  customer: CustomerDbEntity;

  @Column({
    name: 'life_cycle_state',
    // type: 'enum',
    // enum: ['pending', 'completed', 'canceled'],
    default: 'pending',
  })
  status: string;

  @Column({
    name: 'state',
    // type: 'enum',
    // enum: ['pending', 'completed', 'canceled'],
    default: 'active',
  })
  state: string;

  @ManyToOne(() => BusinessDbEntity, (business) => business.id, {
    nullable: false,
  })
  @JoinColumn({ name: 'business_id' })
  business: BusinessDbEntity;

  @OneToMany(() => OrderItemDbEntity, (orderItem) => orderItem.order, {
    cascade: true,
  })
  items: OrderItemDbEntity[];

  @CreateDateColumn({ name: 'order_date', type: 'datetime', nullable: true })
  orderDate: Date;

  @CreateDateColumn({ name: 'created_at', type: 'datetime' })
  createdAt: Date;

  @UpdateDateColumn({ name: 'updated_at', type: 'datetime' })
  updatedAt: Date;
}
