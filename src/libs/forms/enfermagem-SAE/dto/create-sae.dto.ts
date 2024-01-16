import { IsDateString, IsIn, IsInt, IsNotEmpty, IsNumber, IsOptional, IsString, MaxLength } from 'class-validator';

export class CreateSAEDto {
  @IsOptional()
  @IsInt()
  paciente_id?: number;

  @IsOptional()
  @IsInt()
  colaborador_id?: number;

  @IsInt()
  @IsNotEmpty()
  procedimento_id: number;

  @IsOptional()
  @IsInt()
  paciente_procedimento_id?: number;

  @IsOptional()
  @IsDateString()
  dt_internacao?: Date;

  @IsOptional()
  @IsString()
  @MaxLength(255)
  apartamento?: string;

  @IsOptional()
  @IsString()
  @MaxLength(255)
  numero_registro?: string;

  @IsOptional()
  @IsString()
  @MaxLength(255)
  idade?: string;

  @IsOptional()
  @IsString()
  @MaxLength(255)
  medico?: string;

  @IsOptional()
  @IsString()
  @MaxLength(255)
  procedimento?: string;

  @IsOptional()
  @IsString()
  @MaxLength(255)
  sinais_vitais_fc?: string;

  @IsOptional()
  @IsString()
  @MaxLength(255)
  sinais_vitais_pa?: string;

  @IsOptional()
  @IsString()
  @MaxLength(255)
  sinais_vitais_saturacao?: string;

  @IsOptional()
  @IsString()
  @MaxLength(255)
  percepcao_sensorial?: string;

  @IsOptional()
  @IsString()
  @MaxLength(255)
  umidade?: string;

  @IsOptional()
  @IsString()
  @MaxLength(255)
  atividade?: string;

  @IsOptional()
  @IsString()
  @MaxLength(255)
  mobilidade?: string;

  @IsOptional()
  @IsString()
  @MaxLength(255)
  nutricao?: string;

  @IsOptional()
  @IsString()
  @MaxLength(255)
  friccao_cisalhamento?: string;

  @IsOptional()
  @IsString()
  @MaxLength(255)
  total_escala_branden?: string;

  @IsOptional()
  @IsIn(['S', 'N'])
  historico_quedas?: string;

  @IsOptional()
  @IsIn(['S', 'N'])
  diagnostico_secundario?: string;

  @IsOptional()
  @IsString()
  @MaxLength(255)
  auxilio_deambulacao?: string;

  @IsOptional()
  @IsIn(['S', 'N'])
  terapia_endovenosa_salinizado_heparinizado?: string;

  @IsOptional()
  @IsString()
  @MaxLength(255)
  marcha?: string;

  @IsOptional()
  @IsString()
  @MaxLength(255)
  estado_mental?: string;

  @IsOptional()
  @IsString()
  @MaxLength(255)
  pontuacao_total_escala_morse?: string;
}
