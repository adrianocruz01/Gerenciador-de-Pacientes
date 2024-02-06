import { IsOptional, IsString } from 'class-validator';

export class FichasAllDto {

  @IsOptional()
  @IsString()
  colaborador_id?: string;

  @IsOptional()
  @IsString()
  paciente_id?: string;

  @IsOptional()
  @IsString()
  paciente_procedimento_id?: string;
  
}
