import { CreateItemDto } from '../../items/dto/create-item.dto';

export class CreateShoppingCartDto {
  cartName: string;
  items?: CreateItemDto[];
}
