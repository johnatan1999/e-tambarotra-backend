import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { ProductsDbEntity } from './products.db.entity';
import { UserDbEntity } from './users.db.entity';

@Entity('stock_adjustments')
export class StockAdjustmentDbEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => ProductsDbEntity, (product) => product.id)
  @JoinColumn({ name: 'product_id' })
  product: ProductsDbEntity;

  @ManyToOne(() => UserDbEntity, (user) => user.id)
  @JoinColumn({ name: 'user_id' })
  user: UserDbEntity;

  @Column({ name: 'adjustment_quantity', type: 'int' })
  newQuantity: number;

  @Column({ name: 'adjusted_quantity', type: 'int' })
  adjustedQuantity: number;

  @Column({ name: 'adjusted_unit_price', type: 'decimal', nullable: true })
  adjustedUnitPrice?: number;

  @Column({
    name: 'type' /*, type: 'enum', enum: ['quantity', 'value', 'both']*/,
  })
  type: 'quantity' | 'value' | 'both';

  @Column({ type: 'varchar', length: 255 })
  reason: string;

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
