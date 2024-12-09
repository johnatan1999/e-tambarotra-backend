import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { ProductsDbEntity } from '@/infrastructure-lib/database/entities/products.db.entity';

@Entity('stock_replenishments')
export class StockReplenishmentDbEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => ProductsDbEntity, (product) => product.id)
  @JoinColumn({ name: 'product_id' })
  product: ProductsDbEntity;

  @Column({ name: 'replenished_quantity', type: 'int' })
  replenishedQuantity: number;

  @Column({ name: 'price', type: 'decimal', precision: 10, scale: 2 })
  price: number;

  @Column({
    name: 'supplier_name',
    type: 'varchar',
    length: 255,
    nullable: true,
  })
  supplierName: string; // New column for supplier name

  @Column({
    name: 'replenishment_date',
    type: 'datetime',
    default: () => 'CURRENT_TIMESTAMP',
  })
  replenishmentDate: Date;

  @Column({
    name: 'replenishment_reason',
    type: 'varchar',
    length: 255,
    nullable: true,
  })
  replenishmentReason: string;

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
