import { Module } from '@nestjs/common';
import { ItemsService } from './items.service';
import { ItemsController } from './items.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ShoppingCartEntity } from '../shopping-cart/entities/shopping-cart.entity';
import { ShoppingCartService } from '../shopping-cart/shopping-cart.service';
import { ItemEntity } from './entities/item.entity';
import { CategoryEntity } from '../category/entities/category.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([ShoppingCartEntity, ItemEntity, CategoryEntity]),
  ],
  controllers: [ItemsController],
  providers: [ItemsService, ShoppingCartService],
})
export class ItemsModule {}
