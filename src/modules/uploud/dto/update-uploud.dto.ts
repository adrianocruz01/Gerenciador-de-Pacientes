import { PartialType } from '@nestjs/mapped-types';
import { CreateUploudDto } from './create-uploud.dto';

export class UpdateUploudDto extends PartialType(CreateUploudDto) {}
