import { IsOptional, IsString } from 'class-validator';

export class FichasAllDto {

  @IsOptional()
  @IsString()
  nome_procedimento?: string;

}
