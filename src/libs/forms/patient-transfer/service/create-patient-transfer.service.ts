import { BadRequestException, Injectable } from '@nestjs/common';
import { CreateTransferenciaPacienteDto } from '../dto/create-patient-transfer.dt';
import { PrismaService } from 'src/shared/db/libs/prisma/prisma.service';

@Injectable()
export class PatientTransferService {
    constructor(private readonly prisma: PrismaService) { }

    async execute(transferenciaPacienteData: CreateTransferenciaPacienteDto, colaborador_id: number) {
        const {
            paciente_id,
            procedimento_id,
            paciente_procedimento_id
        } = transferenciaPacienteData;

        const exists = await this.prisma.ficha_Transferencia_Paciente.findFirst({
            where: { paciente_ProcedimentoPaciente_Procedimento_id: paciente_procedimento_id },
        });

        if (exists) {
            throw new BadRequestException('Esta ficha de transferência de paciente já existe para este paciente e procedimento');
        }

        const create = await this.prisma.ficha_Transferencia_Paciente.create({
            data: {
                fch_transferencia_paciente_status: transferenciaPacienteData.fch_transferencia_paciente_status,
                apartamento: transferenciaPacienteData.apartamento,
                srpa: transferenciaPacienteData.srpa,
                alta: transferenciaPacienteData.alta,
                recomendacoes: transferenciaPacienteData.recomendacoes,
                recomendacoes_quais: transferenciaPacienteData.recomendacoes_quais,
                horario_encaminhamento: transferenciaPacienteData.horario_encaminhamento,
                nome_enfermeiro_tecnico_enfermagem: transferenciaPacienteData.nome_enfermeiro_tecnico_enfermagem,
                nome_anestesista: transferenciaPacienteData.nome_anestesista,
                consciencia_total_indicealdrete: transferenciaPacienteData.consciencia_total_indicealdrete,
                consciencia_total_aochegar: transferenciaPacienteData.consciencia_total_aochegar,
                consciencia_total_30min: transferenciaPacienteData.consciencia_total_30min,
                consciencia_total_antesalta: transferenciaPacienteData.consciencia_total_antesalta,
                desperta_ao_chamado_indicealdrete: transferenciaPacienteData.desperta_ao_chamado_indicealdrete,
                desperta_chamado_aochegar: transferenciaPacienteData.desperta_chamado_aochegar,
                desperta_ao_chamado_30min: transferenciaPacienteData.desperta_ao_chamado_30min,
                desperta_ao_chamado_antesalta: transferenciaPacienteData.desperta_ao_chamado_antesalta,
                nao_responde_ao_indicealdrete: transferenciaPacienteData.nao_responde_ao_indicealdrete,
                nao_responde_aochegar: transferenciaPacienteData.nao_responde_aochegar,
                nao_responde_30min: transferenciaPacienteData.nao_responde_30min,
                nao_responde_antesalta: transferenciaPacienteData.nao_responde_antesalta,
                capaz_respirar_profundamente_indicealdrete: transferenciaPacienteData.capaz_respirar_profundamente_indicealdrete,
                capaz_respirar_profundamente_aochegar: transferenciaPacienteData.capaz_respirar_profundamente_aochegar,
                capaz_respirar_profundamente_30min: transferenciaPacienteData.capaz_respirar_profundamente_30min,
                capaz_respirar_profundamente_antesalta: transferenciaPacienteData.capaz_respirar_profundamente_antesalta,
                dispineia_movimento_respiratorio_indicealdrete: transferenciaPacienteData.dispineia_movimento_respiratorio_indicealdrete,
                dispineia_movimento_respiratorio_aochegar: transferenciaPacienteData.dispineia_movimento_respiratorio_aochegar,
                dispineia_movimento_respiratorio_30min: transferenciaPacienteData.dispineia_movimento_respiratorio_30min,
                dispineia_movimento_respiratorio_antesalta: transferenciaPacienteData.dispineia_movimento_respiratorio_antesalta,
                apneia_indicealdrete: transferenciaPacienteData.apneia_indicealdrete,
                apneia_aochegar: transferenciaPacienteData.apneia_aochegar,
                apneia_30min: transferenciaPacienteData.apneia_30min,
                apneia_antesalta: transferenciaPacienteData.apneia_antesalta,
                pa_20_indicealdrete: transferenciaPacienteData.pa_20_indicealdrete,
                pa_20_aochegar: transferenciaPacienteData.pa_20_aochegar,
                pa_20_30min: transferenciaPacienteData.pa_20_30min,
                pa_20_antesalta: transferenciaPacienteData.pa_20_antesalta,
                pa_20_50_indicealdrete: transferenciaPacienteData.pa_20_50_indicealdrete,
                pa_20_50_aochegar: transferenciaPacienteData.pa_20_50_aochegar,
                pa_20_50_30min: transferenciaPacienteData.pa_20_50_30min,
                pa_20_50_antesalta: transferenciaPacienteData.pa_20_50_antesalta,
                pa_superior_50_indicealdrete: transferenciaPacienteData.pa_superior_50_indicealdrete,
                pa_superior_50_aochegar: transferenciaPacienteData.pa_superior_50_aochegar,
                pa_superior_50_30min: transferenciaPacienteData.pa_superior_50_30min,
                pa_superior_50_antesalta: transferenciaPacienteData.pa_superior_50_antesalta,
                movimentar_4_extremidades_indicealdrete: transferenciaPacienteData.movimentar_4_extremidades_indicealdrete,
                movimentar_4_extremidades_aochegar: transferenciaPacienteData.movimentar_4_extremidades_aochegar,
                movimentar_4_extremidades_30min: transferenciaPacienteData.movimentar_4_extremidades_30min,
                movimentar_4_extremidades_antesalta: transferenciaPacienteData.movimentar_4_extremidades_antesalta,
                movimentar_2_extremidades_indicealdrete: transferenciaPacienteData.movimentar_2_extremidades_indicealdrete,
                movimentar_2_extremidades_aochegar: transferenciaPacienteData.movimentar_2_extremidades_aochegar,
                movimentar_2_extremidades_30min: transferenciaPacienteData.movimentar_2_extremidades_30min,
                movimentar_2_extremidades_antesalta: transferenciaPacienteData.movimentar_2_extremidades_antesalta,
                movimentar_qualquer_extremidades_indicealdrete: transferenciaPacienteData.movimentar_qualquer_extremidades_indicealdrete,
                movimentar_qualquer_extremidades_aochegar: transferenciaPacienteData.movimentar_qualquer_extremidades_aochegar,
                movimentar_qualquer_extremidades_30min: transferenciaPacienteData.movimentar_qualquer_extremidades_30min,
                movimentar_qualquer_extremidades_antesalta: transferenciaPacienteData.movimentar_qualquer_extremidades_antesalta,
                saturacao_95_100_indicealdrete: transferenciaPacienteData.saturacao_95_100_indicealdrete,
                saturacao_95_100_aochegar: transferenciaPacienteData.saturacao_95_100_aochegar,
                saturacao_95_100_30min: transferenciaPacienteData.saturacao_95_100_30min,
                saturacao_95_100_antesalta: transferenciaPacienteData.saturacao_95_100_antesalta,
                saturacao_92_95_indicealdrete: transferenciaPacienteData.saturacao_92_95_indicealdrete,
                saturacao_92_95_aochegar: transferenciaPacienteData.saturacao_92_95_aochegar,
                saturacao_92_95_30min: transferenciaPacienteData.saturacao_92_95_30min,
                saturacao_92_95_antesalta: transferenciaPacienteData.saturacao_92_95_antesalta,
                saturacao_92_indicealdrete: transferenciaPacienteData.saturacao_92_indicealdrete,
                saturacao_92_aochegar: transferenciaPacienteData.saturacao_92_aochegar,
                saturacao_92_30min: transferenciaPacienteData.saturacao_92_30min,
                saturacao_92_antesalta: transferenciaPacienteData.saturacao_92_antesalta,
                sem_dor_0min: transferenciaPacienteData.sem_dor_0min,
                sem_dor_30min: transferenciaPacienteData.sem_dor_30min,
                sem_dor_60min: transferenciaPacienteData.sem_dor_60min,
                sem_dor_90min: transferenciaPacienteData.sem_dor_90min,
                sem_dor_120min: transferenciaPacienteData.sem_dor_120min,
                leve_1a3_0min: transferenciaPacienteData.leve_1a3_0min,
                leve_1a3_30min: transferenciaPacienteData.leve_1a3_30min,
                leve_1a3_60min: transferenciaPacienteData.leve_1a3_60min,
                leve_1a3_90min: transferenciaPacienteData.leve_1a3_90min,
                leve_1a3_120min: transferenciaPacienteData.leve_1a3_120min,
                moderada_4a6_0min: transferenciaPacienteData.moderada_4a6_0min,
                moderada_4a6_30min: transferenciaPacienteData.moderada_4a6_30min,
                moderada_4a6_60min: transferenciaPacienteData.moderada_4a6_60min,
                moderada_4a6_90min: transferenciaPacienteData.moderada_4a6_90min,
                moderada_4a6_120min: transferenciaPacienteData.moderada_4a6_120min,
                intensa_7a10_0min: transferenciaPacienteData.intensa_7a10_0min,
                intensa_7a10_30min: transferenciaPacienteData.intensa_7a10_30min,
                intensa_7a10_60min: transferenciaPacienteData.intensa_7a10_60min,
                intensa_7a10_90min: transferenciaPacienteData.intensa_7a10_90min,
                intensa_7a10_120min: transferenciaPacienteData.intensa_7a10_120min,
                a10_condicao_alta_srpa: transferenciaPacienteData.a10_condicao_alta_srpa,
                a7_vigilancia_relativa: transferenciaPacienteData.a7_vigilancia_relativa,
                Paciente: {
                    connect: {
                        paciente_id: +paciente_id,
                    },
                },
                Colaborador: {
                    connect: { colaborador_id: colaborador_id },
                },
                Procedimento: {
                    connect: {
                        procedimento_id: +procedimento_id,
                    },
                },
                Paciente_Procedimento: {
                    connect: {
                        paciente_Procedimento_id: +paciente_procedimento_id,
                    },
                },
            },
        });
        return create;
    }
}
