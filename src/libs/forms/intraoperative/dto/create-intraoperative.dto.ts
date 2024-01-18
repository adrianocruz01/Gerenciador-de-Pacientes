import { IsIn, IsInt, IsNumber, IsOptional, IsString, MaxLength } from 'class-validator';

export class CreateIntraoperativeDto {

  @IsInt()
  @IsOptional()
  paciente_id: number;

  @IsInt()
  @IsOptional()
  procedimento_id: number;

  @IsInt()
  @IsOptional()
  paciente_procedimento_id: number;
  
  @IsOptional()
  @IsString()
  fch_intraoperatoria_status?: string;

  @IsOptional()
  @IsIn(['S', 'N'])
  questionar_paciente?: string;

  @IsOptional()
  @IsIn(['S', 'N'])
  termos_consentimento_assinados?: string;

  @IsOptional()
  @IsIn(['S', 'N'])
  sitio_demarcado?: string;

  @IsOptional()
  @IsIn(['S', 'N'])
  sitio_demarcado_nao_aplica?: string;

  @IsOptional()
  @IsIn(['S', 'N'])
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
  @IsIn(['S', 'N'])
  paciente_alergico?: string;

  @IsOptional()
  @IsString()
  @MaxLength(255)
  paciente_alergico_qual?: string;

  @IsOptional()
  @IsIn(['S', 'N'])
  risco_broncoaspiracao?: string;

  @IsOptional()
  @IsIn(['S', 'N'])
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
  @IsIn(['S', 'N'])
  antibioticoprofilaxia?: string;

  @IsOptional()
  @IsString()
  @MaxLength(255)
  antibioticoprofilaxia_horario?: string;

  @IsOptional()
  @IsIn(['S', 'N'])
  acesso_venoso_periferico?: string;

  @IsOptional()
  @IsString()
  @MaxLength(255)
  acesso_venoso_periferico_local?: string;

  @IsOptional()
  @IsIn(['S', 'N'])
  pam?: string;

  @IsOptional()
  @IsString()
  @MaxLength(255)
  pam_local?: string;

  @IsOptional()
  @IsIn(['S', 'N'])
  acesso_dificil?: string;

  @IsOptional()
  @IsIn(['S', 'N'])
  perda_acesso?: string;

  @IsOptional()
  @IsString()
  @MaxLength(255)
  tipo_fixacao?: string;

  @IsOptional()
  @IsIn(['S', 'N'])
  posicao_operatorio_trendelemburg?: string;

  @IsOptional()
  @IsIn(['S', 'N'])
  posicao_operatorio_lateral_direira?: string;

  @IsOptional()
  @IsIn(['S', 'N'])
  posicao_operatorio_lateral_esquerda?: string;

  @IsOptional()
  @IsIn(['S', 'N'])
  posicao_operatorio_lateral_dorsal?: string;

  @IsOptional()
  @IsIn(['S', 'N'])
  posicao_operatorio_lateral_ventral?: string;

  @IsOptional()
  @IsIn(['S', 'N'])
  posicao_operatorio_lateral_semiGinecologica?: string;

  @IsOptional()
  @IsIn(['S', 'N'])
  posicao_operatorio_lateral_Ginecologica?: string;

  @IsOptional()
  @IsIn(['S', 'N'])
  assistencia_ventilosa_ar_ambiente?: string;

  @IsOptional()
  @IsIn(['S', 'N'])
  assistencia_ventilosa_masc_02?: string;

  @IsOptional()
  @IsIn(['S', 'N'])
  assistencia_ventilosa_catete_02?: string;

  @IsOptional()
  @IsString()
  @MaxLength(255)
  assistencia_ventilosa_mascara_laringea?: string;

  @IsOptional()
  @IsIn(['S', 'N'])
  assistencia_ventilosa_mascara_venture?: string;

  @IsOptional()
  @IsString()
  @MaxLength(255)
  assistencia_ventilosa_tubo_endotraqueal?: string;

  @IsOptional()
  @IsIn(['S', 'N'])
  mobilizacao?: string;

  @IsOptional()
  @IsIn(['S', 'N'])
  implantacao_materiais_equipamentos_disponiveis?: string;

  @IsOptional()
  @IsIn(['S', 'N'])
  prontuario_preenchido?: string;

  @IsOptional()
  @IsIn(['S', 'N'])
  mobilizacao_local?: string;

  @IsOptional()
  @IsIn(['S', 'N'])
  meia_elastica?: string;

  @IsOptional()
  @IsIn(['S', 'N'])
  ataduras?: string;

  @IsOptional()
  @IsIn(['S', 'N'])
  bota_pneumatica?: string;

  @IsOptional()
  @IsIn(['S', 'N'])
  higienizacao_clorex_dergemate?: string;

  @IsOptional()
  @IsIn(['S', 'N'])
  higienizacao_alcoolica?: string;

  @IsOptional()
  @IsIn(['S', 'N'])
  higienizacao_aquosa?: string;

  @IsOptional()
  @IsString()
  @MaxLength(255)
  higienizacao_responsavel?: string;

  @IsOptional()
  @IsIn(['S', 'N'])
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
