import { IsInt, IsString, IsOptional, IsIn } from 'class-validator';

export class FichaRecebimentoPacienteCirurgiaDto {
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
  fch_recebimento_paciente_cirurgia_status?: string;

  @IsString()
  @IsOptional()
  horario_chegada?: string;

  @IsString()
  @IsOptional()
  sala?: string;

  @IsString()
  @IsOptional()
  responsavel_recebimento_paciente?: string;

  @IsString()
  @IsOptional()
  @IsIn(['S', 'N'])
  anexo?: string;

  @IsString()
  @IsOptional()
  anexo_qual?: string;

  @IsString()
  @IsOptional()
  @IsIn(['S', 'N'])
  materiais_implantes_equipamentos?: string;

  @IsString()
  @IsOptional()
  @IsIn(['S', 'N'])
  prazo_validacao_esterilizacao?: string;

  @IsString()
  @IsOptional()
  @IsIn(['S', 'N'])
  integradores_quimicos_todas_caixas?: string;

  @IsString()
  @IsOptional()
  @IsIn(['S', 'N'])
  montagem_so_conforme_procedimento?: string;

  @IsString()
  @IsOptional()
  observacao?: string;
}
