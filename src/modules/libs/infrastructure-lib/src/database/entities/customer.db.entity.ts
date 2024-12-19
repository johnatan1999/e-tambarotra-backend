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
import { OrderDbEntity } from './order.db.entity';
import { BusinessDbEntity } from '@/infrastructure-lib/database/entities/business.db.entity';

@Entity('customers')
export class CustomerDbEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ name: 'first_name', type: 'varchar', length: 255 })
  firstName: string;

  @Column({ name: 'last_name', type: 'varchar', length: 255, default: '' })
  lastName: string;

  @Column({ type: 'varchar', length: 255, nullable: true })
  email: string;

  @Column({ type: 'varchar', length: 20, nullable: true })
  phone: string;

  @Column({ type: 'text', nullable: true })
  address: string;

  @Column({ name: 'additional_information', type: 'text', nullable: true })
  additionalInformation: string;

  @Column({
    // type: 'enum',
    // enum: ['individual', 'enterprise'],
    name: 'customer_type',
  })
  type: 'individual' | 'enterprise';

  @Column({
    type: 'varchar',
    length: 255,
    name: 'business_name',
    nullable: true,
  })
  customerBusinessName: string | null;

  @ManyToOne(() => BusinessDbEntity, (business) => business.customers)
  @JoinColumn({ name: 'business_id' })
  business: BusinessDbEntity;

  @CreateDateColumn({ name: 'created_at', type: 'datetime' })
  createdAt: Date;

  @UpdateDateColumn({ name: 'updated_at', type: 'datetime' })
  updatedAt: Date;

  @OneToMany(() => OrderDbEntity, (order) => order.customer)
  orders: OrderDbEntity[];
}
