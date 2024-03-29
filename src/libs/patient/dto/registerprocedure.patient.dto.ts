import { IsString, IsDateString, IsNumber, IsEnum } from 'class-validator';

export class RegisterprocedureDto {
  @IsString()
  nomeProcedimento: string;

  @IsDateString()
  dataHora: string;

  @IsDateString()
  dataRegistro: string;

  @IsNumber()
  procedimentoId: number;
}
