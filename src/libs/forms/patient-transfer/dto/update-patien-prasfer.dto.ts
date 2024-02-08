import { IsInt, IsString, IsOptional, IsIn } from 'class-validator';

export class CreateFichaTransferenciaPacienteDto {
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
  @IsIn(['A', 'I'])
  fch_transferencia_paciente_status?: string;

  @IsString()
  @IsOptional()
  apartamento?: string;

  @IsString()
  @IsOptional()
  srpa?: string;

  @IsString()
  @IsOptional()
  alta?: string;

  @IsString()
  @IsOptional()
  recomendacoes?: string;

  @IsString()
  @IsOptional()
  recomendacoes_quais?: string;

  @IsString()
  @IsOptional()
  horario_encaminhamento?: string;

  @IsString()
  @IsOptional()
  nome_enfermeiro_tecnico_enfermagem?: string;

  @IsString()
  @IsOptional()
  nome_anestesista?: string;

  @IsInt()
  @IsOptional()
  consciencia_total_indicealdrete?: number;

  @IsInt()
  @IsOptional()
  consciencia_total_aochegar?: number;

  @IsInt()
  @IsOptional()
  consciencia_total_30min?: number;

  @IsInt()
  @IsOptional()
  consciencia_total_antesalta?: number;

  @IsInt()
  @IsOptional()
  desperta_ao_chamado_indicealdrete?: number;

  @IsInt()
  @IsOptional()
  desperta_chamado_aochegar?: number;

  @IsInt()
  @IsOptional()
  desperta_ao_chamado_30min?: number;

  @IsInt()
  @IsOptional()
  desperta_ao_chamado_antesalta?: number;

  @IsInt()
  @IsOptional()
  nao_responde_ao_indicealdrete?: number;

  @IsInt()
  @IsOptional()
  nao_responde_aochegar?: number;

  @IsInt()
  @IsOptional()
  nao_responde_30min?: number;

  @IsInt()
  @IsOptional()
  nao_responde_antesalta?: number;

}
