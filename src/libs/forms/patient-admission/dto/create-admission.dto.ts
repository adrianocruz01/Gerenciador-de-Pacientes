import { IsDateString, IsIn, IsInt, IsNotEmpty, IsOptional, IsString, MaxLength } from 'class-validator';

export class CreateAdmissionDto {
  @IsInt()
  @IsNotEmpty()
  paciente_id: number;

  @IsInt()
  @IsNotEmpty()
  colaborador_id: number;

  @IsInt()
  @IsNotEmpty()
  procedimento_id: number;

  @IsInt()
  @IsNotEmpty()
  paciente_procedimento_id: number;

  @IsOptional()
  @IsString()
  dt_internacao?: string;

  @IsOptional()
  @IsString()
  @IsIn(['S', 'N'])
  pulseira_identificacao?: string;

  @IsOptional()
  @IsString()
  @MaxLength(255)
  fumante?: string;

  @IsOptional()
  @IsString()
  @MaxLength(255)
  @IsIn(['S', 'N'])
  alergia_intolerancia_medicamentosa?: string;

  @IsOptional()
  @IsString()
  @MaxLength(255)
  alergia_intolerancia_medicamentosa_qual?: string;

  @IsOptional()
  @IsString()
  @MaxLength(255)
  @IsIn(['S', 'N'])
  alergia_intolerancia_alimentar?: string;

  @IsOptional()
  @IsString()
  @MaxLength(255)
  alergia_intolerancia_alimentar_qual?: string;

  @IsOptional()
  @IsString()
  @MaxLength(255)
  jejum_inicio_hora?: string;

  @IsOptional()
  @IsString()
  @MaxLength(255)
  jejum_inicio_dia?: string;

  @IsOptional()
  @IsString()
  @MaxLength(255)
  @IsIn(['S', 'N'])
  doenca_previa?: string;

  @IsOptional()
  @IsString()
  @MaxLength(255)
  doenca_previa_qual?: string;

  @IsOptional()
  @IsString()
  @MaxLength(255)
  @IsIn(['S', 'N'])
  medicacao_continua?: string;

  @IsOptional()
  @IsString()
  @MaxLength(255)
  medicacao_continua_qual?: string;

  @IsOptional()
  @IsString()
  @MaxLength(255)
  @IsIn(['S', 'N'])
  tricotomia?: string;

  @IsOptional()
  @IsString()
  @MaxLength(255)
  tricotomia_regiao?: string;

  @IsOptional()
  @IsString()
  @MaxLength(255)
  tricotomia_metodo?: string;

  @IsOptional()
  @IsString()
  @MaxLength(255)
  @IsIn(['S', 'N'])
  banho_pre_operatorio?: string;

  @IsOptional()
  @IsString()
  @MaxLength(255)
  banho_pre_operatorio_horario?: string;

  @IsOptional()
  @IsString()
  @MaxLength(255)
  banho_pre_operatorio_dia?: string;

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
