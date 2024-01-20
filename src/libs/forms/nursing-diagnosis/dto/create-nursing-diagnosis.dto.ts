import { IsIn, IsInt, IsNotEmpty, IsOptional, IsString, MaxLength } from 'class-validator';

export class CreateNursingDiagnosisDto {
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
    @IsIn(['A', 'I']) // 'A' para Ativo e 'I' para Inativo (ou outra lógica de validação)
    fch_diagnostico_enfermagem_status?: string;

    @IsString()
    @IsOptional()
    @IsIn(['S', 'N']) // 'S' para Sim e 'N' para Não (ou outra lógica de validação)
    insonia_relacionado_ansiedade?: string;

    @IsString()
    @IsOptional()
    @IsIn(['S', 'N']) // 'S' para Sim e 'N' para Não (ou outra lógica de validação)
    deficit_autocuidado_banho?: string;

    @IsString()
    @IsOptional()
    @IsIn(['S', 'N']) // 'S' para Sim e 'N' para Não (ou outra lógica de validação)
    retencao_urinario?: string;

    @IsString()
    @IsOptional()
    @IsIn(['S', 'N']) // 'S' para Sim e 'N' para Não (ou outra lógica de validação)
    deambulacao_projudicada_dor?: string;

    @IsString()
    @IsOptional()
    @IsIn(['S', 'N']) // 'S' para Sim e 'N' para Não (outra lógica de validação)
    nausea_medo_ansiedade?: string;

    @IsString()
    @IsOptional()
    @IsIn(['S', 'N']) // 'S' para Sim e 'N' para Não (outra lógica de validação)
    ansiedade_relacionado_estressores?: string;

    @IsString()
    @IsOptional()
    @IsIn(['S', 'N']) // 'S' para Sim e 'N' para Não (outra lógica de validação)
    risco_lesao_presao?: string;

    @IsString()
    @IsOptional()
    @IsIn(['S', 'N']) // 'S' para Sim e 'N' para Não (outra lógica de validação)
    risco_reacao_alergica?: string;

    @IsString()
    @IsOptional()
    @IsIn(['S', 'N']) // 'S' para Sim e 'N' para Não (outra lógica de validação)
    risco_lesao_trato_urinario?: string;

    @IsString()
    @IsOptional()
    @IsIn(['S', 'N']) // 'S' para Sim e 'N' para Não (outra lógica de validação)
    risco_queda_hipontensao?: string;

    @IsString()
    @IsOptional()
    @IsIn(['S', 'N']) // 'S' para Sim e 'N' para Não (outra lógica de validação)
    risco_tromboembolismo_veneso?: string;

    @IsString()
    @IsOptional()
    @IsIn(['S', 'N']) // 'S' para Sim e 'N' para Não (outra lógica de validação)
    risco_hiportemia_perioperatoria?: string;

    @IsString()
    @IsOptional()
    @MaxLength(255)
    observacao?: string;

    @IsString()
    @IsOptional()
    @MaxLength(255)
    verificacao_ssvv?: string;

    @IsString()
    @IsOptional()
    @MaxLength(255)
    observar_posicionamento_paciente?: string;

    @IsString()
    @IsOptional()
    @MaxLength(255)
    observar_nauseas_vomitos?: string;

    @IsString()
    @IsOptional()
    @MaxLength(255)
    atentar_queixar_dor?: string;

    @IsString()
    @IsOptional()
    @MaxLength(255)
    estimular_deambulacao?: string;

    @IsString()
    @IsOptional()
    @MaxLength(255)
    observar_dreno_sonda?: string;

    @IsString()
    @IsOptional()
    @MaxLength(255)
    realizar_protecao_proeminencias_osseas?: string;

    @IsString()
    @IsOptional()
    @MaxLength(255)
    observar_local_puncao_venosa?: string;

    @IsString()
    @IsOptional()
    @MaxLength(255)
    manter_grades_elevadas?: string;

    @IsString()
    @IsOptional()
    @MaxLength(255)
    manter_monitorizacao_hemodinamica?: string;

    @IsString()
    @IsOptional()
    @MaxLength(255)
    realizar_banho_aspersao?: string;

    @IsString()
    @IsOptional()
    @MaxLength(255)
    realizar_curativo?: string;

    @IsString()
    @IsOptional()
    @MaxLength(255)
    estimular_eliminacao_espontanea?: string;

    @IsString()
    @IsOptional()
    @MaxLength(255)
    realizar_sondagem_vesical?: string;

    @IsString()
    @IsOptional()
    @MaxLength(255)
    manter_paciente_aquecido?: string;

    @IsString()
    @IsOptional()
    @MaxLength(255)
    checar_identificador_alergia?: string;
}
