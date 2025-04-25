import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { PurchaseDbEntity } from './purchase.db.entity';
import { UserDbEntity } from '@/infrastructure-lib/database/entities/users.db.entity';
import { BusinessDbEntity } from '@/infrastructure-lib/database/entities/business.db.entity';

@Entity('suppliers')
export class SupplierDbEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar', length: 255 })
  name: string;

  @Column({
    name: 'contact_name',
    type: 'varchar',
    length: 255,
    nullable: true,
  })
  contactName?: string;

  @Column({ type: 'varchar', length: 255, nullable: true })
  phone?: string;

  @Column({ type: 'varchar', length: 255, nullable: true })
  email?: string;

  @Column({ type: 'text', nullable: true })
  address?: string;

  @Column({
    name: 'company_name',
    type: 'varchar',
    length: 255,
    nullable: true,
  })
  companyName?: string;

  @ManyToOne(() => UserDbEntity)
  @JoinColumn({ name: 'created_by' })
  createdBy: UserDbEntity;

  @ManyToOne(() => UserDbEntity)
  @JoinColumn({ name: 'updated_by' })
  updatedBy: UserDbEntity;

  @ManyToOne(() => BusinessDbEntity, (business) => business.id)
  @JoinColumn({ name: 'business_id' })
  business: BusinessDbEntity;

  @OneToMany(() => PurchaseDbEntity, (purchase) => purchase.supplier)
  purchases: PurchaseDbEntity[];

  @Column({
    name: 'created_at',
    type: 'datetime',
    default: () => 'CURRENT_TIMESTAMP',
  })
  createdAt: Date;

  @Column({
    name: 'updated_at',
    type: 'datetime',
    default: () => 'CURRENT_TIMESTAMP',
  })
  updatedAt: Date;
}
