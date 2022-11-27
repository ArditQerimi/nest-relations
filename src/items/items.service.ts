import { Injectable } from '@nestjs/common';
import { CreateItemDto } from './dto/create-item.dto';
import { UpdateItemDto } from './dto/update-item.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { ShoppingCartEntity } from '../shopping-cart/entities/shopping-cart.entity';
import { Repository } from 'typeorm';
import { ItemEntity } from './entities/item.entity';

@Injectable()
export class ItemsService {
  constructor(
    @InjectRepository(ItemEntity)
    private itemRepository: Repository<ItemEntity>,
  ) {}

  async create(createItemDto: CreateItemDto) {
    const result = await this.itemRepository.save(createItemDto);
    return result;
  }

  async loadItems(id: string): Promise<ItemEntity[]> {
    const foundedItem = await this.itemRepository.find({
      where: { shoppingCart: { id: id } },
      // where: { id: id },
      relations: {
        shoppingCart: true,
      },
    });
    return foundedItem;
  }

  findAll() {
    return `This action returns all items`;
  }

  findOne(id: number) {
    return `This action returns a #${id} item`;
  }

  update(id: number, updateItemDto: UpdateItemDto) {
    return `This action updates a #${id} item`;
  }

  remove(id: number) {
    return `This action removes a #${id} item`;
  }
}
