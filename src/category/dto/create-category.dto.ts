import { CreateItemDto } from '../../items/dto/create-item.dto';

export class CreateCategoryDto {
  categoryName?: string;

  items?: CreateItemDto[];
}
