import { Injectable } from '@nestjs/common';
import { CreateShoppingCartDto } from './dto/create-shopping-cart.dto';
import { UpdateShoppingCartDto } from './dto/update-shopping-cart.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { ShoppingCartEntity } from './entities/shopping-cart.entity';
import { Repository } from 'typeorm';

@Injectable()
export class ShoppingCartService {
  constructor(
    @InjectRepository(ShoppingCartEntity)
    private shoppingCartRepository: Repository<ShoppingCartEntity>,
  ) {}

  async create(shoppingCartRepository: CreateShoppingCartDto) {
    const result = await this.shoppingCartRepository.save(
      shoppingCartRepository,
    );
    return result.id;
  }

  async findAll(): Promise<ShoppingCartEntity[]> {
    return await this.shoppingCartRepository.find({
      relations: {
        item: true,
      },
    });
  }

  async findOneCart(id: string) {
    return await this.shoppingCartRepository.find({
      where: { id: id },
      relations: { item: true },
    });
  }

  update(id: number, updateShoppingCartDto: UpdateShoppingCartDto) {
    return `This action updates a #${id} shoppingCart`;
  }

  remove(id: number) {
    return `This action removes a #${id} shoppingCart`;
  }
}
