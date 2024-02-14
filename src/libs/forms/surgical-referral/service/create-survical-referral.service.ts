import { BadRequestException, Injectable } from '@nestjs/common';
import { CreateSurvicalReferralDto } from '../dto/create-survical.dto'; // Importe o DTO correto
import { PrismaService } from 'src/shared/db/libs/prisma/prisma.service';

@Injectable()
export class CreateSurvicalReferralService {
    constructor(private readonly prisma: PrismaService) { }

    async execute(survicalReferral: CreateSurvicalReferralDto, colaborador_id: number) {
        const { paciente_id, procedimento_id, paciente_procedimento_id } = survicalReferral;

        const exists = await this.prisma.ficha_Encaminhamento_Paciente_Cirurgia.findFirst({
            where: { paciente_ProcedimentoPaciente_Procedimento_id: paciente_procedimento_id },
        });

        if (exists) {
            throw new BadRequestException('Essa ficha já foi preenchida para este procedimento');
        }

        const create = await this.prisma.ficha_Encaminhamento_Paciente_Cirurgia.create({
            data: {
                fch_encaminhamento_paciente_cirurgia_status: survicalReferral.fch_encaminhamento_paciente_cirurgia_status,
                consentimento_cirurgico_assinado: survicalReferral.consentimento_cirurgico_assinado,
                consentimento_anestesico_assinado: survicalReferral.consentimento_anestesico_assinado,
                avaliacao_pre_anestesico: survicalReferral.avaliacao_pre_anestesico,
                exames_complementares_imagem: survicalReferral.exames_complementares_imagem,
                retirada_pecas_intimas: survicalReferral.retirada_pecas_intimas,
                retirada_orteose_proteses_adernos: survicalReferral.retirada_orteose_proteses_adernos,
                sitio_cirurgico_demarcado: survicalReferral.sitio_cirurgico_demarcado,
                sitio_cirurgico_demarcado_observacao: survicalReferral.sitio_cirurgico_demarcado_observacao,
                encaminhamento_centro_cirurgico_horario: survicalReferral.encaminhamento_centro_cirurgico_horario,
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
