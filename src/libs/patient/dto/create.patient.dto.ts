import { Transform } from 'class-transformer';
import { IsString, IsDate, Matches, IsEnum, MinLength, MaxLength, IsOptional } from 'class-validator';

export class CreatePatientDto {
  @IsString()
  @Matches(/^[a-zA-ZáàâãéèêíïóôõöúçñÁÀÂÃÉÈÍÏÓÔÕÖÚÇÑ ]+$/, {
    message: 'Nome completo inválido',
  })
  nome: string;

  @IsString()
  @Matches(/^\d{3}\.\d{3}\.\d{3}\-\d{2}$/, { message: 'CPF inválido' })
  cpf: string;

  @IsEnum(['M', 'F'], { message: 'Sexo inválido. Valores permitidos: M, F' })
  sexo: string;

  @Transform(({ value }) => new Date(value), { toClassOnly: true })
  @IsDate({ message: 'Data de nascimento inválida' })
  dtnascimento: Date;
}
