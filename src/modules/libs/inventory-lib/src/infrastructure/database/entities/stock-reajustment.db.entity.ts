import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { ProductsDbEntity } from '@/inventory-lib/infrastructure/database/entities/products.db.entity';
import { UserDbEntity } from '@/inventory-lib/infrastructure/database/entities/users.db.entity';

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

  @Column({ type: 'int' })
  adjustmentQuantity: number;

  @Column({ type: 'varchar', length: 255 })
  reason: string;

  @Column({ type: 'datetime', default: () => 'CURRENT_TIMESTAMP' })
  createdAt: Date;

  @Column({ type: 'datetime', default: () => 'CURRENT_TIMESTAMP' })
  updatedAt: Date;
}
