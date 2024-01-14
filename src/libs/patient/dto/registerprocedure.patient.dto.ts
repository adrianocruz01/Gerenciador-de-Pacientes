import { Paciente_Procedimento_Status } from '@prisma/client';
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

  @IsEnum(Paciente_Procedimento_Status)
  status: Paciente_Procedimento_Status;
}
