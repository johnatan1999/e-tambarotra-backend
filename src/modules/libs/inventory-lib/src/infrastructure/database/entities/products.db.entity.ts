import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { BusinessDbEntity } from '@/inventory-lib/infrastructure/database/entities/business.db.entity';

@Entity('products')
export class ProductsDbEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar', length: 255 })
  name: string;

  @Column({ type: 'text' })
  imageUrl: string;

  @Column({ type: 'decimal' })
  price: number;

  @Column({ type: 'decimal' })
  purchasePrice: number;

  @Column({ type: 'int' })
  availableStock: number;

  @Column({ type: 'int' })
  reorderThreshold: number;

  @ManyToOne(() => BusinessDbEntity, (business) => business.products)
  @JoinColumn({ name: 'business_id' })
  business: BusinessDbEntity;

  @Column({ type: 'datetime', default: () => 'CURRENT_TIMESTAMP' })
  createdAt: Date;

  @Column({ type: 'datetime', default: () => 'CURRENT_TIMESTAMP' })
  updatedAt: Date;
}
