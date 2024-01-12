import { IsString, IsDateString, IsNumber } from 'class-validator';

export class CreatePatientProcedureDto {
  @IsString()
  nomeProcedimento: string;

  @IsDateString()
  dtregistro: string;

  @IsDateString()
  hrregistro: string;

  @IsNumber()
  procedimentoId: number;
}
