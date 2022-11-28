import {
  BaseEntity,
  Column,
  Entity,
  JoinTable,
  ManyToMany,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { ShoppingCartEntity } from '../../shopping-cart/entities/shopping-cart.entity';
import { CategoryEntity } from '../../category/entities/category.entity';

@Entity('item')
export class ItemEntity {
  @PrimaryGeneratedColumn({
    name: 'Id',
  })
  id?: string;

  @Column({
    name: 'ItemName',
    nullable: true,
  })
  itemName?: string;

  @ManyToOne(() => ShoppingCartEntity, (shoppingCart) => shoppingCart.item, {
    // nullable: true,
    cascade: true,
  })
  shoppingCart?: ShoppingCartEntity;

  @ManyToMany(() => CategoryEntity, (category) => category.item, {
    // nullable: true,
    cascade: true,
  })
  @JoinTable({ name: 'CategoryItem' })
  category?: CategoryEntity[];
}
