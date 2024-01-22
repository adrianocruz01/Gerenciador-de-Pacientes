import { IsOptional, IsString, IsInt, IsIn } from 'class-validator';

export class CreateControleMaterialDto {
  @IsOptional()
  @IsInt()
  paciente_procedimento_id?: number;

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
  @IsIn(['S', 'N'])
  fch_controle_material_status?: string;

  @IsOptional()
  @IsString()
  contagem_compressas_entregues?: string;

  @IsOptional()
  @IsString()
  contagem_compressas_devolvidas?: string;

  @IsOptional()
  @IsString()
  contagem_gases_entregues?: string;

  @IsOptional()
  @IsString()
  contagem_gases_devolvidas?: string;

  @IsOptional()
  @IsString()
  contagem_instrumental_entregues?: string;

  @IsOptional()
  @IsString()
  contagem_instrumental_devolvidas?: string;

  @IsOptional()
  @IsIn(['S', 'N'])
  pecas_cirurgicas_anatomia?: string;

  @IsOptional()
  @IsString()
  pecas_cirurgicas_anatomia_quantidade?: string;

  @IsOptional()
  @IsIn(['S', 'N'])
  pecas_identificadas?: string;

  @IsOptional()
  @IsIn(['S', 'N'])
  soro_infusao_medicamentos_fluidos?: string;

  @IsOptional()
  @IsIn(['S', 'N'])
  pulseira_identificacao?: string;

  @IsOptional()
  @IsIn(['S', 'N'])
  problemas_equipamentos?: string;

  @IsOptional()
  @IsString()
  problemas_equipamentos_quais?: string;
}