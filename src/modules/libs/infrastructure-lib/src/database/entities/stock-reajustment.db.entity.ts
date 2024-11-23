import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { ProductsDbEntity } from './products.db.entity';
import { UserDbEntity } from './users.db.entity';

@Entity('stock_reajustments')
export class StockReajustmentDbEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => ProductsDbEntity, (product) => product.id)
  @JoinColumn({ name: 'product_id' })
  product: ProductsDbEntity;

  @ManyToOne(() => UserDbEntity, (user) => user.id)
  @JoinColumn({ name: 'user_id' })
  user: UserDbEntity;

  @Column({ name: 'adjustement_quantity', type: 'int' })
  adjustmentQuantity: number;

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
