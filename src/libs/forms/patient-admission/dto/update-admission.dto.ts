import { IsInt, IsString, IsOptional, IsIn } from 'class-validator';

export class FichaAdmissaoPacienteUnidadeDto {
  @IsInt()
  @IsOptional()
  paciente_id?: number;

  @IsInt()
  @IsOptional()
  colaborador_id?: number;

  @IsInt()
  @IsOptional()
  procedimento_id?: number;

  @IsString()
  @IsOptional()
  @IsIn(['A', 'I']) // Substitua 'A' e 'I' pelos valores reais aceitos para fch_admissao_paciente_unidade_status
  fch_admissao_paciente_unidade_status?: string;

  @IsString()
  @IsOptional()
  @IsIn(['S', 'N']) // Substitua 'S' e 'N' pelos valores reais aceitos para pulseira_identificacao
  pulseira_identificacao?: string;

  @IsString()
  @IsOptional()
  @IsIn(['S', 'N']) // Substitua 'S' e 'N' pelos valores reais aceitos para fumante
  fumante?: string;

  @IsString()
  @IsOptional()
  @IsIn(['S', 'N']) // Substitua 'S' e 'N' pelos valores reais aceitos para alergia_intolerancia_medicamentosa
  alergia_intolerancia_medicamentosa?: string;

  @IsString()
  @IsOptional()
  alergia_intolerancia_medicamentosa_qual?: string;

  @IsString()
  @IsOptional()
  @IsIn(['S', 'N']) // Substitua 'S' e 'N' pelos valores reais aceitos para alergia_intolerancia_alimentar
  alergia_intolerancia_alimentar?: string;

  @IsString()
  @IsOptional()
  alergia_intolerancia_alimentar_qual?: string;

  @IsString()
  @IsOptional()
  jejum_inicio_hora?: string;

  @IsString()
  @IsOptional()
  jejum_inicio_dia?: string;

  @IsString()
  @IsOptional()
  @IsIn(['S', 'N']) // Substitua 'S' e 'N' pelos valores reais aceitos para doenca_previa
  doenca_previa?: string;

  @IsString()
  @IsOptional()
  doenca_previa_qual?: string;

  @IsString()
  @IsOptional()
  @IsIn(['S', 'N']) // Substitua 'S' e 'N' pelos valores reais aceitos para medicacao_continua
  medicacao_continua?: string;

  @IsString()
  @IsOptional()
  medicacao_continua_qual?: string;

  @IsString()
  @IsOptional()
  @IsIn(['S', 'N']) // Substitua 'S' e 'N' pelos valores reais aceitos para tricotomia
  tricotomia?: string;

  @IsString()
  @IsOptional()
  tricotomia_regiao?: string;

  @IsString()
  @IsOptional()
  tricotomia_metodo?: string;

  @IsString()
  @IsOptional()
  @IsIn(['S', 'N']) // Substitua 'S' e 'N' pelos valores reais aceitos para banho_pre_operatorio
  banho_pre_operatorio?: string;

  @IsString()
  @IsOptional()
  banho_pre_operatorio_horario?: string;

  @IsString()
  @IsOptional()
  banho_pre_operatorio_dia?: string;
}
