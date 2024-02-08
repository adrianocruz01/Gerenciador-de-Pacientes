import { IsInt, IsString, IsOptional, IsIn } from 'class-validator';

export class CreateFichaEncaminhamentoPacienteDto {
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
  @IsIn(['A', 'I']) // Substitua 'A' e 'I' pelos valores reais aceitos para fch_encaminhamento_paciente_status
  fch_encaminhamento_paciente_status?: string;

  @IsString()
  @IsOptional()
  encaminhamento_horario?: string;

  @IsString()
  @IsOptional()
  @IsIn(['S', 'N']) // Substitua 'S' e 'N' pelos valores reais aceitos para cateter_venoso
  cateter_venoso?: string;

  @IsString()
  @IsOptional()
  cateter_venoso_local?: string;

  @IsString()
  @IsOptional()
  @IsIn(['S', 'N']) // Substitua 'S' e 'N' pelos valores reais aceitos para sonda_vesical_demora
  sonda_vesical_demora?: string;

  @IsString()
  @IsOptional()
  @IsIn(['S', 'N']) // Substitua 'S' e 'N' pelos valores reais aceitos para dreno
  dreno?: string;

  @IsString()
  @IsOptional()
  dreno_qual?: string;

  @IsString()
  @IsOptional()
  dreno_local?: string;

  @IsString()
  @IsOptional()
  @IsIn(['S', 'N']) // Substitua 'S' e 'N' pelos valores reais aceitos para peca_patologica
  peca_patologica?: string;

  @IsString()
  @IsOptional()
  @IsIn(['S', 'N']) // Substitua 'S' e 'N' pelos valores reais aceitos para prontuario_completo
  prontuario_completo?: string;

  @IsString()
  @IsOptional()
  prontuario_completo_observacao?: string;
}
