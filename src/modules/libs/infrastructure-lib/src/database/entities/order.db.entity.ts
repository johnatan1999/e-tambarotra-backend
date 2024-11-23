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

@Entity('orders')
export class OrderDbEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ name: 'customer_name', type: 'varchar', length: 255 })
  customerName: string;

  @Column({
    name: 'customer_email',
    type: 'varchar',
    length: 255,
    nullable: true,
  })
  customerEmail: string;

  @Column({
    name: 'customer_phone',
    type: 'varchar',
    length: 20,
    nullable: true,
  })
  customerPhone: string;

  @Column({ name: 'total_price', type: 'decimal', precision: 10, scale: 2 })
  totalPrice: number;

  @Column({
    name: 'status',
    // type: 'enum',
    // enum: ['pending', 'completed', 'canceled'],
    default: 'pending',
  })
  status: string;

  @ManyToOne(() => BusinessDbEntity, (business) => business.id, {
    nullable: false,
  })
  @JoinColumn({ name: 'business_id' })
  business: BusinessDbEntity;

  @OneToMany(() => OrderItemDbEntity, (orderItem) => orderItem.order, {
    cascade: true,
  })
  items: OrderItemDbEntity[];

  @CreateDateColumn({ name: 'created_at', type: 'datetime' })
  createdAt: Date;

  @UpdateDateColumn({ name: 'updated_at', type: 'datetime' })
  updatedAt: Date;
}
