import { IsInt, IsOptional, IsString, MaxLength } from 'class-validator';

export class UpdateFichaIntraoperatoriaDto {
  @IsOptional()
  @IsInt()
  paciente_id?: number;

  @IsOptional()
  @IsInt()
  colaborador_id?: number;

  @IsOptional()
  @IsInt()
  procedimento_id?: number;

  @IsOptional()
  @IsString()
  @MaxLength(1)
  fch_intraoperatoria_status?: string;

  @IsOptional()
  @IsString()
  @MaxLength(1)
  questionar_paciente?: string;

  @IsOptional()
  @IsString()
  @MaxLength(1)
  termos_consentimento_assinados?: string;

  @IsOptional()
  @IsString()
  @MaxLength(1)
  sitio_demarcado?: string;

  @IsOptional()
  @IsString()
  @MaxLength(1)
  sitio_demarcado_nao_aplica?: string;

  @IsOptional()
  @IsString()
  @MaxLength(1)
  oximetro_instalado_funcionando?: string;

  @IsOptional()
  @IsString()
  @MaxLength(255)
  eletrodos_pneumatico_pa?: string;

  @IsOptional()
  @IsString()
  @MaxLength(255)
  eletrodos_pneumatico_mmhg?: string;

  @IsOptional()
  @IsString()
  @MaxLength(1)
  paciente_alergico?: string;

  @IsOptional()
  @IsString()
  @MaxLength(255)
  paciente_alergico_qual?: string;

  @IsOptional()
  @IsString()
  @MaxLength(1)
  risco_broncoaspiracao?: string;

  @IsOptional()
  @IsString()
  @MaxLength(1)
  profilaxia_para_tev?: string;

  @IsOptional()
  @IsString()
  @MaxLength(255)
  profilaxia_para_tev_horario?: string;

  @IsOptional()
  @IsString()
  @MaxLength(255)
  profilaxia_para_tev_qual?: string;

  @IsOptional()
  @IsString()
  @MaxLength(1)
  antibioticoprofilaxia?: string;

  @IsOptional()
  @IsString()
  @MaxLength(255)
  antibioticoprofilaxia_horario?: string;

  @IsOptional()
  @IsString()
  @MaxLength(1)
  acesso_venoso_periferico?: string;

  @IsOptional()
  @IsString()
  @MaxLength(255)
  acesso_venoso_periferico_local?: string;

  @IsOptional()
  @IsString()
  @MaxLength(1)
  pam?: string;

  @IsOptional()
  @IsString()
  @MaxLength(255)
  pam_local?: string;

  @IsOptional()
  @IsString()
  @MaxLength(1)
  acesso_dificil?: string;

  @IsOptional()
  @IsString()
  @MaxLength(1)
  perda_acesso?: string;

  @IsOptional()
  @IsString()
  @MaxLength(255)
  tipo_fixacao?: string;

  @IsOptional()
  @IsString()
  @MaxLength(1)
  posicao_operatorio_trendelemburg?: string;

  @IsOptional()
  @IsString()
  @MaxLength(1)
  posicao_operatorio_lateral_direira?: string;

  @IsOptional()
  @IsString()
  @MaxLength(1)
  posicao_operatorio_lateral_esquerda?: string;

  @IsOptional()
  @IsString()
  @MaxLength(1)
  posicao_operatorio_lateral_dorsal?: string;

  @IsOptional()
  @IsString()
  @MaxLength(1)
  posicao_operatorio_lateral_ventral?: string;

  @IsOptional()
  @IsString()
  @MaxLength(1)
  posicao_operatorio_lateral_semiGinecologica?: string;

  @IsOptional()
  @IsString()
  @MaxLength(1)
  posicao_operatorio_lateral_Ginecologica?: string;

  @IsOptional()
  @IsString()
  @MaxLength(1)
  assistencia_ventilosa_ar_ambiente?: string;

  @IsOptional()
  @IsString()
  @MaxLength(1)
  assistencia_ventilosa_masc_02?: string;

  @IsOptional()
  @IsString()
  @MaxLength(1)
  assistencia_ventilosa_catete_02?: string;

  @IsOptional()
  @IsString()
  @MaxLength(255)
  assistencia_ventilosa_mascara_laringea?: string;

  @IsOptional()
  @IsString()
  @MaxLength(1)
  assistencia_ventilosa_mascara_venture?: string;

  @IsOptional()
  @IsString()
  @MaxLength(255)
  assistencia_ventilosa_tubo_endotraqueal?: string;

  @IsOptional()
  @IsString()
  @MaxLength(1)
  mobilizacao?: string;

  @IsOptional()
  @IsString()
  @MaxLength(1)
  implantacao_materiais_equipamentos_disponiveis?: string;

  @IsOptional()
  @IsString()
  @MaxLength(1)
  prontuario_preenchido?: string;

  @IsOptional()
  @IsString()
  @MaxLength(1)
  mobilizacao_local?: string;

  @IsOptional()
  @IsString()
  @MaxLength(1)
  meia_elastica?: string;

  @IsOptional()
  @IsString()
  @MaxLength(1)
  ataduras?: string;

  @IsOptional()
  @IsString()
  @MaxLength(1)
  bota_pneumatica?: string;

  @IsOptional()
  @IsString()
  @MaxLength(1)
  higienizacao_clorex_dergemate?: string;

  @IsOptional()
  @IsString()
  @MaxLength(1)
  higienizacao_alcoolica?: string;

  @IsOptional()
  @IsString()
  @MaxLength(1)
  higienizacao_aquosa?: string;

  @IsOptional()
  @IsString()
  @MaxLength(255)
  higienizacao_responsavel?: string;

  @IsOptional()
  @IsString()
  @MaxLength(1)
  placa_bisturi?: string;

  @IsOptional()
  @IsString()
  @MaxLength(255)
  placa_bisturi_localizacao?: string;

  @IsOptional()
  @IsString()
  @MaxLength(255)
  placa_bisturi_frequencia?: string;
}
