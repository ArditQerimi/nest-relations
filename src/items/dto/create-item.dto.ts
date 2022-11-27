import { CreateShoppingCartDto } from '../../shopping-cart/dto/create-shopping-cart.dto';

export class CreateItemDto {
  itemName: string;

  shoppingCart?: CreateShoppingCartDto;
}
