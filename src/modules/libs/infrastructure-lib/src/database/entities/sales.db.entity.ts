import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { ProductsDbEntity } from './products.db.entity';
import { UserDbEntity } from './users.db.entity';

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

  @Column({ name: 'total_price', type: 'decimal' })
  totalPrice: number;

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
