import { IsInt, IsString, IsOptional, IsIn, IsBoolean } from 'class-validator';

export class UpdateFichaAvaliacaoNutricionalDto {
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
  @IsIn(['A', 'I']) // Substitua 'A' e 'I' pelos valores reais aceitos para fch_avaliacao_nutricional_status
  fch_avaliacao_nutricional_status?: string;

  @IsString()
  @IsOptional()
  diabetes?: string;

  @IsString()
  @IsOptional()
  medicamento_diabetes?: string;

  @IsString()
  @IsOptional()
  medicamento_diabetes_qual?: string;

  @IsString()
  @IsOptional()
  horario_isulina?: string;

  // Adicione as validações para os outros campos conforme necessário

  // Exemplo:
  @IsString()
  @IsOptional()
  disturbios_renais?: string;

  @IsString()
  @IsOptional()
  distubios_tireoide?: string;

  @IsString()
  @IsOptional()
  disturbios_hepaticos?: string;

  @IsString()
  @IsOptional()
  cardiopatias?: string;

  @IsString()
  @IsOptional()
  doencao_respiratoria?: string;

  @IsString()
  @IsOptional()
  outras_patologias_quais?: string;

  @IsString()
  @IsOptional()
  fumante?: string;

  @IsString()
  @IsOptional()
  fumante_frequencia?: string;

  @IsString()
  @IsOptional()
  mastigacao?: string;

  @IsString()
  @IsOptional()
  medicamento_diaria?: string;

  @IsString()
  @IsOptional()
  medicamento_diaria_qual?: string;

  @IsString()
  @IsOptional()
  azia_gastrite_refluxo?: string;

  @IsString()
  @IsOptional()
  azia_gastrite_refluxo_qual?: string;

  @IsString()
  @IsOptional()
  funcionamento_intestinal_regular?: string;

  @IsString()
  @IsOptional()
  funcionamento_intestinal_costipado?: string;

  @IsString()
  @IsOptional()
  alergias?: string;

  @IsString()
  @IsOptional()
  alergias_qual?: string;

  @IsString()
  @IsOptional()
  aversao_intolerancia_alimentares?: string;

  @IsString()
  @IsOptional()
  aversao_intolerancia_alimentares_qual?: string;
}
