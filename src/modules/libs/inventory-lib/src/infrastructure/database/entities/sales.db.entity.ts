import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { ProductsDbEntity } from '@/inventory-lib/infrastructure/database/entities/products.db.entity';
import { UserDbEntity } from '@/inventory-lib/infrastructure/database/entities/users.db.entity';

@Entity('sales')
export class SalesDbEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => ProductsDbEntity, (product) => product.id)
  @JoinColumn({ name: 'product_id' })
  product: ProductsDbEntity;

  @ManyToOne(() => UserDbEntity, (user) => user.id)
  @JoinColumn({ name: 'user_id' })
  user: UserDbEntity;

  @Column({ type: 'int' })
  quantity: number;

  @Column({ type: 'decimal' })
  totalPrice: number;

  @Column({ type: 'datetime', default: () => 'CURRENT_TIMESTAMP' })
  createdAt: Date;

  @Column({ type: 'datetime', default: () => 'CURRENT_TIMESTAMP' })
  updatedAt: Date;
}
