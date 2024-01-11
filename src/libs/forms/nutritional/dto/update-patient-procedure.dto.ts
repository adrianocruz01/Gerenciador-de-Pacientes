import { PartialType } from '@nestjs/swagger';
import { CreateNutritionalDto } from './create-nutritional.dto';

export class UpdateNutritionalDto extends PartialType(CreateNutritionalDto) {}
