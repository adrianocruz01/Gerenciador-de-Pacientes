import { IsIn, IsInt, IsNotEmpty, IsOptional, IsString, MaxLength } from 'class-validator';

export class CreateControleMaterialDto {
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
  fch_controle_material_status?: string;

  @IsString()
  @IsOptional()
  @IsIn(['S', 'N']) // 'S' para Sim e 'N' para Não (ou outra lógica de validação)
  contagem_compressas_entregues?: string;

  @IsString()
  @IsOptional()
  @IsIn(['S', 'N']) // 'S' para Sim e 'N' para Não (outra lógica de validação)
  contagem_compressas_devolvidas?: string;

  @IsString()
  @IsOptional()
  @IsIn(['S', 'N']) // 'S' para Sim e 'N' para Não (outra lógica de validação)
  contagem_gases_entregues?: string;

  @IsString()
  @IsOptional()
  @IsIn(['S', 'N']) // 'S' para Sim e 'N' para Não (outra lógica de validação)
  contagem_gases_devolvidas?: string;

  @IsString()
  @IsOptional()
  @IsIn(['S', 'N']) // 'S' para Sim e 'N' para Não (outra lógica de validação)
  contagem_instrumental_entregues?: string;

  @IsString()
  @IsOptional()
  @IsIn(['S', 'N']) // 'S' para Sim e 'N' para Não (outra lógica de validação)
  contagem_instrumental_devolvidas?: string;

  @IsString()
  @IsOptional()
  @IsIn(['S', 'N']) // 'S' para Sim e 'N' para Não (outra lógica de validação)
  pecas_cirurgicas_anatomia?: string;

  @IsString()
  @IsOptional()
  @MaxLength(255)
  pecas_cirurgicas_anatomia_quantidade?: string;

  @IsString()
  @IsOptional()
  @IsIn(['S', 'N']) // 'S' para Sim e 'N' para Não (outra lógica de validação)
  pecas_identificadas?: string;

  @IsString()
  @IsOptional()
  @IsIn(['S', 'N']) // 'S' para Sim e 'N' para Não (outra lógica de validação)
  soro_infusao_medicamentos_fluidos?: string;

  @IsString()
  @IsOptional()
  @IsIn(['S', 'N']) // 'S' para Sim e 'N' para Não (outra lógica de validação)
  pulseira_identificacao?: string;

  @IsString()
  @IsOptional()
  @IsIn(['S', 'N']) // 'S' para Sim e 'N' para Não (outra lógica de validação)
  problemas_equipamentos?: string;

  @IsString()
  @IsOptional()
  @MaxLength(255)
  problemas_equipamentos_quais?: string;
}
