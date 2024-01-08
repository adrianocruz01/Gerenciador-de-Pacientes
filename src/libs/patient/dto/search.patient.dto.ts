import { IsOptional, IsString } from 'class-validator';

export class SearchPatientDto {
  @IsOptional()
  @IsString()
  //   @Matches(/^[a-zA-ZáàâãéèêíïóôõöúçñÁÀÂÃÉÈÍÏÓÔÕÖÚÇÑ ]+$/, { message: 'Nome completo inválido' })
  nome?: string;

  @IsOptional()
  @IsString()
  //   @Matches(/^\d{3}\.\d{3}\.\d{3}\-\d{2}$/, { message: 'CPF inválido.' })
  cpf?: string;
}
