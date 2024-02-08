import { IsInt, IsOptional, IsString } from 'class-validator';

export class UpdateFichaDiagnosticoEnfermagemDto {
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
  fch_diagnostico_enfermagem_status?: string;

  @IsOptional()
  @IsString()
  insonia_relacionado_ansiedade?: string;

  @IsOptional()
  @IsString()
  deficit_autocuidado_banho?: string;

  @IsOptional()
  @IsString()
  retencao_urinario?: string;

  @IsOptional()
  @IsString()
  deambulacao_projudicada_dor?: string;

  @IsOptional()
  @IsString()
  nausea_medo_ansiedade?: string;

  @IsOptional()
  @IsString()
  ansiedade_relacionado_estressores?: string;

  @IsOptional()
  @IsString()
  risco_lesao_presao?: string;

  @IsOptional()
  @IsString()
  risco_reacao_alergica?: string;

  @IsOptional()
  @IsString()
  risco_lesao_trato_urinario?: string;

  @IsOptional()
  @IsString()
  risco_queda_hipontensao?: string;

  @IsOptional()
  @IsString()
  risco_tromboembolismo_veneso?: string;

  @IsOptional()
  @IsString()
  risco_hiportemia_perioperatoria?: string;

  @IsOptional()
  @IsString()
  observacao?: string;

  @IsOptional()
  @IsString()
  verificacao_ssvv?: string;

  @IsOptional()
  @IsString()
  observar_posicionamento_paciente?: string;

  @IsOptional()
  @IsString()
  observar_nauseas_vomitos?: string;

  @IsOptional()
  @IsString()
  atentar_queixar_dor?: string;

  @IsOptional()
  @IsString()
  estimular_deambulacao?: string;

  @IsOptional()
  @IsString()
  observar_dreno_sonda?: string;

  @IsOptional()
  @IsString()
  realizar_protecao_proeminencias_osseas?: string;

  @IsOptional()
  @IsString()
  observar_local_puncao_venosa?: string;

  @IsOptional()
  @IsString()
  manter_grades_elevadas?: string;

  @IsOptional()
  @IsString()
  manter_monitorizacao_hemodinamica?: string;

  @IsOptional()
  @IsString()
  realizar_banho_aspersao?: string;

  @IsOptional()
  @IsString()
  realizar_curativo?: string;

  @IsOptional()
  @IsString()
  estimular_eliminacao_espontanea?: string;

  @IsOptional()
  @IsString()
  realizar_sondagem_vesical?: string;

  @IsOptional()
  @IsString()
  manter_paciente_aquecido?: string;

  @IsOptional()
  @IsString()
  checar_identificador_alergia?: string;
}
