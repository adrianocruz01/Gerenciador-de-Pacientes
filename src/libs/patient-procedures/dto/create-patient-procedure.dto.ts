import { IsDateString, IsNumber } from 'class-validator';

export class CreatePatientProcedureDto {

  @IsDateString()
  dtregistro: string;

  @IsDateString()
  hrregistro: string;

  @IsNumber()
  procedimentoId: number;
}
