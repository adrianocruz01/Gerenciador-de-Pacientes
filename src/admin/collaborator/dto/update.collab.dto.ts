import { PartialType } from '@nestjs/mapped-types';
import { CreateColaboradorDto } from './create-collab.dto';

export class UpdateColaboradorDto extends PartialType(CreateColaboradorDto) {}
