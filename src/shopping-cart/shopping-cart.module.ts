import { Module } from '@nestjs/common';
import { ShoppingCartService } from './shopping-cart.service';
import { ShoppingCartController } from './shopping-cart.controller';
import { ItemsService } from '../items/items.service';
import { ItemEntity } from '../items/entities/item.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ShoppingCartEntity } from './entities/shopping-cart.entity';

@Module({
  imports: [TypeOrmModule.forFeature([ItemEntity, ShoppingCartEntity])],
  controllers: [ShoppingCartController],
  providers: [ShoppingCartService, ItemsService],
})
export class ShoppingCartModule {}
