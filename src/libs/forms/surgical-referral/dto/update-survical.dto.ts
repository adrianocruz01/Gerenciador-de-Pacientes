import { IsInt, IsString, IsOptional, IsIn } from 'class-validator';

export class FichaEncaminhamentoPacienteCirurgiaDto {
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
  @IsIn(['A', 'I']) // Substitua 'A' e 'I' pelos valores reais aceitos para fch_encaminhamento_paciente_cirurgia_status
  fch_encaminhamento_paciente_cirurgia_status?: string;

  @IsString()
  @IsOptional()
  consentimento_cirurgico_assinado?: string;

  @IsString()
  @IsOptional()
  consentimento_anestesico_assinado?: string;

  @IsString()
  @IsOptional()
  avaliacao_pre_anestesico?: string;

  @IsString()
  @IsOptional()
  exames_complementares_imagem?: string;

  @IsString()
  @IsOptional()
  retirada_pecas_intimas?: string;

  @IsString()
  @IsOptional()
  retirada_orteose_proteses_adernos?: string;

  @IsString()
  @IsOptional()
  sitio_cirurgico_demarcado?: string;

  @IsString()
  @IsOptional()
  sitio_cirurgico_demarcado_observacao?: string;

  @IsString()
  @IsOptional()
  encaminhamento_centro_cirurgico_horario?: string;
}
