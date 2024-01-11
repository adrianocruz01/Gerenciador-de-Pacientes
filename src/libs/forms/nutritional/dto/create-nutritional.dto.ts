import { IsEnum, IsNumber, IsOptional, IsString, MaxLength, maxLength } from 'class-validator';

export class CreateNutritionalDto {
  @IsEnum(['1', '2'], { message: 'Status inválido' })
  fch_avaliacao_nutricional_status: string;

  @IsString()
  @MaxLength(3)
  diabetes: string;

  @IsOptional()
  @IsString()
  @MaxLength(1)
  medicamento_diabetes: string;

  @IsOptional()
  @IsString()
  medicamento_diabetes_qual: string;

  @IsOptional()
  @IsString()
  horario_insulina: string;

  @IsOptional()
  @IsString()
  @MaxLength(1)
  hipertensao: string;

  @IsOptional()
  @IsString()
  @MaxLength(1)
  medicamento_hipertensao: string;

  @IsOptional()
  @IsString()
  medicamento_hipertensao_quais: string;

  @IsOptional()
  @IsString()
  @MaxLength(1)
  dislipidemias: string;

  @IsOptional()
  @IsString()
  @MaxLength(1)
  disturbios_renais: string;

  @IsOptional()
  @IsString()
  @MaxLength(1)
  distubios_tireoide: string;

  @IsOptional()
  @IsString()
  @MaxLength(1)
  disturbios_hepaticos: string;

  @IsOptional()
  @IsString()
  @MaxLength(1)
  cardiopatias: string;

  @IsOptional()
  @IsString()
  @MaxLength(1)
  doencao_respiratoria: string;

  @IsOptional()
  @IsString()
  outras_patologias_quais: string;

  @IsOptional()
  @IsString()
  @MaxLength(1)
  fumante: string;

  @IsOptional()
  @IsString()
  fumantfumante_frequenciae: string;

  @IsOptional()
  @IsString()
  @MaxLength(1)
  mastigacao: string;

  @IsOptional()
  @IsString()
  @MaxLength(1)
  medicamento_diaria: string;

  @IsOptional()
  @IsString()
  medicamento_diaria_qual: string;

  @IsOptional()
  @IsString()
  @MaxLength(1)
  azia_gastrite_refluxo: string;

  @IsOptional()
  @IsString()
  azia_gastrite_refluxo_qual: string;

  @IsOptional()
  @IsString()
  @MaxLength(1)
  funcionamento_intestinal_regular: string;

  @IsOptional()
  @IsString()
  @MaxLength(1)
  funcionamento_intestinal_costipado: string;

  @IsOptional()
  @IsString()
  @MaxLength(1)
  alergias: string;

  @IsOptional()
  @IsString()
  alergias_qual: string;

  @IsOptional()
  @IsString()
  @MaxLength(1)
  aversao_intolerancia_alimentares: string;

  @IsOptional()
  @IsString()
  aversao_intolerancia_alimentares_qual: string;
}
