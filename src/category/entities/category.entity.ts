import {
  BaseEntity,
  Column,
  Entity,
  ManyToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { ItemEntity } from '../../items/entities/item.entity';

@Entity('category')
export class CategoryEntity {
  @PrimaryGeneratedColumn({
    name: 'Id',
  })
  id?: string;

  @Column({
    name: 'CategoryName',
    nullable: true,
  })
  categoryName?: string;

  @ManyToMany(() => ItemEntity, (item) => item.category)
  item?: ItemEntity;
}
