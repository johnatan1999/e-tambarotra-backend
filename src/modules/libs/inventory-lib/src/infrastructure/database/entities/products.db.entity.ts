import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('products')
export class ProductsDbEntity {
  @PrimaryGeneratedColumn()
  id: number; // Auto-incremented primary key

  @Column({ type: 'varchar', length: 255 })
  name: string; // Name of the products

  @Column({ type: 'varchar', length: 500 })
  imageUrl: string; // URL of the products image

  @Column({ type: 'int' })
  price: number; // Price of the products

  @Column({ type: 'int', name: 'purchase_price' })
  purchasePrice: number; // Purchase price of the products

  @Column({ type: 'int', name: 'available_stock' })
  availableStock: number; // Stock availability

  @Column({ type: 'int', name: 'reorder_threshold' })
  reorderThreshold: number; // Threshold for reordering
}
