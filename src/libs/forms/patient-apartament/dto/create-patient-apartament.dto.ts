import { IsIn, IsInt, IsNotEmpty, IsOptional, IsString, MaxLength } from 'class-validator';

export class CreatePatientApartamentPacienteDto {
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
    fch_encaminhamento_paciente_status?: string;

    @IsString()
    @IsOptional()
    @MaxLength(255)
    encaminhamento_horario?: string;

    @IsString()
    @IsOptional()
    @IsIn(['S', 'N']) // 'S' para Sim e 'N' para Não (ou outra lógica de validação)
    cateter_venoso?: string;

    @IsString()
    @IsOptional()
    @MaxLength(255)
    cateter_venoso_local?: string;

    @IsString()
    @IsOptional()
    @IsIn(['S', 'N']) // 'S' para Sim e 'N' para Não (ou outra lógica de validação)
    sonda_vesical_demora?: string;

    @IsString()
    @IsOptional()
    @IsIn(['S', 'N']) // 'S' para Sim e 'N' para Não (ou outra lógica de validação)
    dreno?: string;

    @IsString()
    @IsOptional()
    @MaxLength(255)
    dreno_qual?: string;

    @IsString()
    @IsOptional()
    @MaxLength(255)
    dreno_local?: string;

    @IsString()
    @IsOptional()
    @IsIn(['S', 'N']) // 'S' para Sim e 'N' para Não (ou outra lógica de validação)
    peca_patologica?: string;

    @IsString()
    @IsOptional()
    @IsIn(['S', 'N']) // 'S' para Sim e 'N' para Não (outra lógica de validação)
    prontuario_completo?: string;

    @IsString()
    @IsOptional()
    @MaxLength(255)
    prontuario_completo_observacao?: string;
}
