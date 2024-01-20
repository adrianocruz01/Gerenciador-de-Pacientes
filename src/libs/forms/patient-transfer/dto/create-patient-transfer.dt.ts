// create-transferencia-paciente.dto.ts
import { IsIn, IsInt, IsNotEmpty, IsOptional, IsString, MaxLength } from 'class-validator';

export class CreateTransferenciaPacienteDto {
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
    fch_transferencia_paciente_status?: string;

    @IsString()
    @IsOptional()
    apartamento?: string;

    @IsString()
    @IsOptional()
    srpa?: string;

    @IsString()
    @IsOptional()
    alta?: string;

    @IsString()
    @IsOptional()
    recomendacoes?: string;

    @IsString()
    @IsOptional()
    recomendacoes_quais?: string;

    @IsString()
    @IsOptional()
    horario_encaminhamento?: string;

    @IsString()
    @IsOptional()
    nome_enfermeiro_tecnico_enfermagem?: string;

    @IsString()
    @IsOptional()
    nome_anestesista?: string;

    @IsInt()
    @IsOptional()
    consciencia_total_indicealdrete?: number;

    @IsInt()
    @IsOptional()
    consciencia_total_aochegar?: number;

    @IsInt()
    @IsOptional()
    consciencia_total_30min?: number;

    @IsInt()
    @IsOptional()
    consciencia_total_antesalta?: number;

    @IsInt()
    @IsOptional()
    desperta_ao_chamado_indicealdrete?: number;

    @IsInt()
    @IsOptional()
    desperta_chamado_aochegar?: number;

    @IsInt()
    @IsOptional()
    desperta_ao_chamado_30min?: number;

    @IsInt()
    @IsOptional()
    desperta_ao_chamado_antesalta?: number;

    @IsInt()
    @IsOptional()
    nao_responde_ao_indicealdrete?: number;

    @IsInt()
    @IsOptional()
    nao_responde_aochegar?: number;

    @IsInt()
    @IsOptional()
    nao_responde_30min?: number;

    @IsInt()
    @IsOptional()
    nao_responde_antesalta?: number;

    @IsInt()
    @IsOptional()
    capaz_respirar_profundamente_indicealdrete?: number;

    @IsInt()
    @IsOptional()
    capaz_respirar_profundamente_aochegar?: number;

    @IsInt()
    @IsOptional()
    capaz_respirar_profundamente_30min?: number;

    @IsInt()
    @IsOptional()
    capaz_respirar_profundamente_antesalta?: number;

    @IsInt()
    @IsOptional()
    dispineia_movimento_respiratorio_indicealdrete?: number;

    @IsInt()
    @IsOptional()
    dispineia_movimento_respiratorio_aochegar?: number;

    @IsInt()
    @IsOptional()
    dispineia_movimento_respiratorio_30min?: number;

    @IsInt()
    @IsOptional()
    dispineia_movimento_respiratorio_antesalta?: number;

    @IsInt()
    @IsOptional()
    apneia_indicealdrete?: number;

    @IsInt()
    @IsOptional()
    apneia_aochegar?: number;

    @IsInt()
    @IsOptional()
    apneia_30min?: number;

    @IsInt()
    @IsOptional()
    apneia_antesalta?: number;

    @IsInt()
    @IsOptional()
    pa_20_indicealdrete?: number;

    @IsInt()
    @IsOptional()
    pa_20_aochegar?: number;

    @IsInt()
    @IsOptional()
    pa_20_30min?: number;

    @IsInt()
    @IsOptional()
    pa_20_antesalta?: number;

    @IsInt()
    @IsOptional()
    pa_20_50_indicealdrete?: number;

    @IsInt()
    @IsOptional()
    pa_20_50_aochegar?: number;

    @IsInt()
    @IsOptional()
    pa_20_50_30min?: number;

    @IsInt()
    @IsOptional()
    pa_20_50_antesalta?: number;

    @IsInt()
    @IsOptional()
    pa_superior_50_indicealdrete?: number;

    @IsInt()
    @IsOptional()
    pa_superior_50_aochegar?: number;

    @IsInt()
    @IsOptional()
    pa_superior_50_30min?: number;

    @IsInt()
    @IsOptional()
    pa_superior_50_antesalta?: number;

    @IsInt()
    @IsOptional()
    movimentar_4_extremidades_indicealdrete?: number;

    @IsInt()
    @IsOptional()
    movimentar_4_extremidades_aochegar?: number;

    @IsInt()
    @IsOptional()
    movimentar_4_extremidades_30min?: number;

    @IsInt()
    @IsOptional()
    movimentar_4_extremidades_antesalta?: number;

    @IsInt()
    @IsOptional()
    movimentar_2_extremidades_indicealdrete?: number;

    @IsInt()
    @IsOptional()
    movimentar_2_extremidades_aochegar?: number;

    @IsInt()
    @IsOptional()
    movimentar_2_extremidades_30min?: number;

    @IsInt()
    @IsOptional()
    movimentar_2_extremidades_antesalta?: number;

    @IsInt()
    @IsOptional()
    movimentar_qualquer_extremidades_indicealdrete?: number;

    @IsInt()
    @IsOptional()
    movimentar_qualquer_extremidades_aochegar?: number;

    @IsInt()
    @IsOptional()
    movimentar_qualquer_extremidades_30min?: number;

    @IsInt()
    @IsOptional()
    movimentar_qualquer_extremidades_antesalta?: number;

    @IsInt()
    @IsOptional()
    saturacao_95_100_indicealdrete?: number;

    @IsInt()
    @IsOptional()
    saturacao_95_100_aochegar?: number;

    @IsInt()
    @IsOptional()
    saturacao_95_100_30min?: number;

    @IsInt()
    @IsOptional()
    saturacao_95_100_antesalta?: number;

    @IsInt()
    @IsOptional()
    saturacao_92_95_indicealdrete?: number;

    @IsInt()
    @IsOptional()
    saturacao_92_95_aochegar?: number;

    @IsInt()
    @IsOptional()
    saturacao_92_95_30min?: number;

    @IsInt()
    @IsOptional()
    saturacao_92_95_antesalta?: number;

    @IsInt()
    @IsOptional()
    saturacao_92_indicealdrete?: number;

    @IsInt()
    @IsOptional()
    saturacao_92_aochegar?: number;

    @IsInt()
    @IsOptional()
    saturacao_92_30min?: number;

    @IsInt()
    @IsOptional()
    saturacao_92_antesalta?: number;

    @IsInt()
    @IsOptional()
    sem_dor_0min?: number;

    @IsInt()
    @IsOptional()
    sem_dor_30min?: number;

    @IsInt()
    @IsOptional()
    sem_dor_60min?: number;

    @IsInt()
    @IsOptional()
    sem_dor_90min?: number;

    @IsInt()
    @IsOptional()
    sem_dor_120min?: number;

    @IsInt()
    @IsOptional()
    leve_1a3_0min?: number;

    @IsInt()
    @IsOptional()
    leve_1a3_30min?: number;

    @IsInt()
    @IsOptional()
    leve_1a3_60min?: number;

    @IsInt()
    @IsOptional()
    leve_1a3_90min?: number;

    @IsInt()
    @IsOptional()
    leve_1a3_120min?: number;

    @IsInt()
    @IsOptional()
    moderada_4a6_0min?: number;

    @IsInt()
    @IsOptional()
    moderada_4a6_30min?: number;

    @IsInt()
    @IsOptional()
    moderada_4a6_60min?: number;

    @IsInt()
    @IsOptional()
    moderada_4a6_90min?: number;

    @IsInt()
    @IsOptional()
    moderada_4a6_120min?: number;

    @IsInt()
    @IsOptional()
    intensa_7a10_0min?: number;

    @IsInt()
    @IsOptional()
    intensa_7a10_30min?: number;

    @IsInt()
    @IsOptional()
    intensa_7a10_60min?: number;

    @IsInt()
    @IsOptional()
    intensa_7a10_90min?: number;

    @IsInt()
    @IsOptional()
    intensa_7a10_120min?: number;

    @IsString()
    @IsOptional()
    a10_condicao_alta_srpa?: string;

    @IsString()
    @IsOptional()
    a7_vigilancia_relativa?: string;
}
