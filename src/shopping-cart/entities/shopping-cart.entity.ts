import {
  BaseEntity,
  Column,
  Entity,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { ItemEntity } from '../../items/entities/item.entity';

@Entity('shoppingCart')
export class ShoppingCartEntity {
  @PrimaryGeneratedColumn({
    name: 'Id',
  })
  id?: string;

  @Column({
    name: 'Cart',
    nullable: true,
  })
  cartName?: string;

  @OneToMany(() => ItemEntity, (item) => item.shoppingCart, { nullable: true })
  item?: ItemEntity[];
}
