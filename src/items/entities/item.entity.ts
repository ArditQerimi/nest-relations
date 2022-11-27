import {
  BaseEntity,
  Column,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { ShoppingCartEntity } from '../../shopping-cart/entities/shopping-cart.entity';

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
}
