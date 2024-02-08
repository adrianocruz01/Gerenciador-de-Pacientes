// ficha-controle-material.dto.ts
import { IsOptional, IsString, IsInt, MaxLength } from 'class-validator';

export class UpdateFichaControleMaterialDto {
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
  @MaxLength(1)
  fch_controle_material_status?: string;

  @IsOptional()
  @IsString()
  @MaxLength(255)
  contagem_compressas_entregues?: string;

  @IsOptional()
  @IsString()
  @MaxLength(255)
  contagem_compressas_devolvidas?: string;

  @IsOptional()
  @IsString()
  @MaxLength(255)
  contagem_gases_entregues?: string;

  @IsOptional()
  @IsString()
  @MaxLength(255)
  contagem_gases_devolvidas?: string;

  @IsOptional()
  @IsString()
  @MaxLength(255)
  contagem_instrumental_entregues?: string;

  @IsOptional()
  @IsString()
  @MaxLength(255)
  contagem_instrumental_devolvidas?: string;

  @IsOptional()
  @IsString()
  @MaxLength(1)
  pecas_cirurgicas_anatomia?: string;

  @IsOptional()
  @IsString()
  @MaxLength(255)
  pecas_cirurgicas_anatomia_quantidade?: string;

  @IsOptional()
  @IsString()
  @MaxLength(1)
  pecas_identificadas?: string;

  @IsOptional()
  @IsString()
  @MaxLength(1)
  soro_infusao_medicamentos_fluidos?: string;

  @IsOptional()
  @IsString()
  @MaxLength(1)
  pulseira_identificacao?: string;

  @IsOptional()
  @IsString()
  @MaxLength(1)
  problemas_equipamentos?: string;

  @IsOptional()
  @IsString()
  @MaxLength(255)
  problemas_equipamentos_quais?: string;
}
