import { Transform } from 'class-transformer';
import { IsString, IsOptional, IsDate, IsEnum } from 'class-validator';

export class UpdatePatientDto {
  @IsString()
  @IsOptional()
  nome?: string;

  @IsString()
  @IsOptional()
  cpf?: string;

  @IsString()
  @IsOptional()
  sexo?: string;

  @Transform(({ value }) => new Date(value), { toClassOnly: true })
  @IsDate({ message: 'Data de nascimento inválida' })
  dtnascimento?: Date;

  @Transform(({ value }) => new Date(value), { toClassOnly: true })
  @IsDate({ message: 'Data de cadastro inválida' })
  dtcadastro?: Date;

  @Transform(({ value }) => new Date(value), { toClassOnly: true })
  @IsDate({ message: 'Data de alteração inválida' })
  dtalteracao?: Date;

  @IsEnum(['A', 'I', null])
  @IsOptional()
  status?: string;
}
