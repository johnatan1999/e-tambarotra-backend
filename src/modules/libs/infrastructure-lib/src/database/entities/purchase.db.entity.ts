import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { ProductsDbEntity } from '@/infrastructure-lib/database/entities/products.db.entity';

@Entity('purchases')
export class PurchaseDbEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => ProductsDbEntity, (product) => product.id)
  @JoinColumn({ name: 'product_id' })
  product: ProductsDbEntity;

  @Column({ name: 'quantity', type: 'int' })
  quantity: number;

  @Column({ name: 'unit_price', type: 'decimal' })
  unitPrice: number;

  @Column({
    name: 'purchase_date',
    type: 'datetime',
    default: () => 'CURRENT_TIMESTAMP',
  })
  purchaseDate: Date;
}
