import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { BusinessDbEntity } from './business.db.entity';
import { PurchaseDbEntity } from '@/infrastructure-lib/database/entities/purchase.db.entity';

@Entity('products')
export class ProductsDbEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar', length: 255 })
  name: string;

  @Column({ name: 'image_url', type: 'text', nullable: true })
  imageUrl: string;

  @Column({ name: 'selling_price', type: 'decimal' })
  sellingPrice: number;

  @Column({ name: 'first_purchase_price', type: 'decimal' })
  firstPurchasePrice: number;

  @Column({ name: 'purchase_price', type: 'decimal' })
  purchasePrice: number;

  @Column({ name: 'cost_price', type: 'decimal', default: 0 })
  costPrice: number;

  @Column({ name: 'available_stock', type: 'int' })
  availableStock: number;

  @Column({ name: 'initial_quantity', type: 'int', default: 0 })
  initialQuantity: number;

  @Column({ name: 'reorder_threshold', type: 'int' })
  reorderThreshold: number;

  @ManyToOne(() => BusinessDbEntity, (business) => business.products)
  @JoinColumn({ name: 'business_id' })
  business: BusinessDbEntity;

  @Column({ name: 'state', type: 'int', default: 1 })
  state: number;

  @Column({
    name: 'created_at',
    type: 'datetime',
    default: () => 'CURRENT_TIMESTAMP',
  })
  createdAt: Date;

  @OneToMany(() => PurchaseDbEntity, (purchase) => purchase.product)
  purchases: PurchaseDbEntity[];

  @Column({
    name: 'updated_at',
    type: 'datetime',
    default: () => 'CURRENT_TIMESTAMP',
  })
  updatedAt: Date;
}
