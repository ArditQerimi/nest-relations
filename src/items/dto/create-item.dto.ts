import { CreateShoppingCartDto } from '../../shopping-cart/dto/create-shopping-cart.dto';
import { CreateCategoryDto } from '../../category/dto/create-category.dto';

export class CreateItemDto {
  itemName?: string;

  shoppingCart?: CreateShoppingCartDto;

  category?: CreateCategoryDto[];
}
