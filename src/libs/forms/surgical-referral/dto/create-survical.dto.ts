import { IsIn, IsInt, IsNotEmpty, IsOptional, IsString, MaxLength } from 'class-validator';

export class CreateSurvicalReferralDto {
  @IsInt()
  @IsOptional()
  paciente_id?: number;

  @IsInt()
  @IsOptional()
  colaborador_id?: number;

  @IsInt()
  @IsOptional()
  procedimento_id?: number;

  @IsInt()
  @IsNotEmpty()
  paciente_procedimento_id: number;

  @IsString()
  @IsOptional()
  @IsIn(['A', 'I']) // 'A' para Assinado e 'I' para Não Assinado (ou outra lógica de validação)
  fch_encaminhamento_paciente_cirurgia_status?: string;

  @IsString()
  @IsOptional()
  @IsIn(['S', 'N']) // 'S' para Sim e 'N' para Não (ou outra lógica de validação)
  consentimento_cirurgico_assinado?: string;

  @IsString()
  @IsOptional()
  @IsIn(['S', 'N']) // 'S' para Sim e 'N' para Não (ou outra lógica de validação)
  consentimento_anestesico_assinado?: string;

  @IsString()
  @IsOptional()
  @IsIn(['S', 'N']) // 'S' para Sim e 'N' para Não (ou outra lógica de validação)
  avaliacao_pre_anestesico?: string;

  @IsString()
  @IsOptional()
  @IsIn(['S', 'N']) // 'S' para Sim e 'N' para Não (ou outra lógica de validação)
  exames_complementares_imagem?: string;

  @IsString()
  @IsOptional()
  @IsIn(['S', 'N']) // 'S' para Sim e 'N' para Não (ou outra lógica de validação)
  retirada_pecas_intimas?: string;

  @IsString()
  @IsOptional()
  @IsIn(['S', 'N']) // 'S' para Sim e 'N' para Não (ou outra lógica de validação)
  retirada_orteose_proteses_adernos?: string;

  @IsString()
  @IsOptional()
  @MaxLength(255)
  sitio_cirurgico_demarcado?: string;

  @IsString()
  @IsOptional()
  @MaxLength(255)
  sitio_cirurgico_demarcado_observacao?: string;

  @IsString()
  @IsOptional()
  @MaxLength(255)
  encaminhamento_centro_cirurgico_horario?: string;
}
