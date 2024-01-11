import { IsEnum, IsNumber } from 'class-validator';

export class CreatePatientProcedureDto {
  @IsNumber()
  procedimento_id: number;

  @IsEnum(['1', '2'], { message: 'Status inválido' })
  status: string;
}
