import { IsString, IsEnum } from 'class-validator';

export class ProcedureDto {
  @IsString()
  nome: string;

  @IsString()
  descricao: string;

  @IsEnum(['1', '2'], { message: 'Status inválido' })
  status: string;
}
