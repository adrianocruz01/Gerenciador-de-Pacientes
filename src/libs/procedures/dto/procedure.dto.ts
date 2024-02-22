import { IsString, IsEnum } from 'class-validator';

export class ProcedureDto {
  @IsString()
  nome: string;

  @IsString()
  descricao: string;

  @IsEnum(['I', 'A'], { message: 'Status inválido' })
  status: string;
}
