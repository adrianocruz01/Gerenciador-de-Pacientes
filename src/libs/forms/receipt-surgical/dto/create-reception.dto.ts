// create-reception.dto.ts

import { IsInt, IsNotEmpty, IsOptional, IsString, MaxLength } from 'class-validator';

export class CreateReceptionDto {
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
  @MaxLength(1)
  fch_recebimento_paciente_cirurgia_status?: string;

  @IsOptional()
  @IsString()
  @MaxLength(255)
  horario_chegada?: string;

  @IsOptional()
  @IsString()
  @MaxLength(255)
  sala?: string;

  @IsOptional()
  @IsString()
  @MaxLength(255)
  responsavel_recebimento_paciente?: string;

  @IsOptional()
  @MaxLength(1)
  anexo?: string;

  @IsOptional()
  @IsString()
  @MaxLength(255)
  anexo_qual?: string;

  @IsOptional()
  @MaxLength(1)
  materiais_implantes_equipamentos?: string;

  @IsOptional()
  @MaxLength(1)
  prazo_validacao_esterilizacao?: string;

  @IsOptional()
  @MaxLength(1)
  integradores_quimicos_todas_caixas?: string;

  @IsOptional()
  @MaxLength(1)
  montagem_so_conforme_procedimento?: string;

  @IsOptional()
  @IsString()
  @MaxLength(255)
  observacao?: string;
}
