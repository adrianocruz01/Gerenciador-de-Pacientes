// reception.service.ts

import { BadRequestException, Injectable } from '@nestjs/common';
import { CreateReceptionDto } from '../dto/create-reception.dto';
import { PrismaService } from 'src/shared/db/libs/prisma/prisma.service';

@Injectable()
export class ReceptionService {
    constructor(private readonly prisma: PrismaService) { }

    async execute(reception: CreateReceptionDto, colaborador_id: number) {
        const { paciente_id, procedimento_id, paciente_procedimento_id } = reception;

        const exists = await this.prisma.ficha_Recebimento_Paciente_Cirurgia.findFirst({
            where: { paciente_ProcedimentoPaciente_Procedimento_id: paciente_procedimento_id },
        });

        if (exists) {
            throw new BadRequestException('Esta ficha de recebimento já foi preenchida para este procedimento');
        }

        return await this.prisma.ficha_Recebimento_Paciente_Cirurgia.create({
            data: {
                fch_recebimento_paciente_cirurgia_status: reception.fch_recebimento_paciente_cirurgia_status,
                horario_chegada: reception.horario_chegada,
                sala: reception.sala,
                responsavel_recebimento_paciente: reception.responsavel_recebimento_paciente,
                anexo: reception.anexo,
                anexo_qual: reception.anexo_qual,
                materiais_implantes_equipamentos: reception.materiais_implantes_equipamentos,
                prazo_validacao_esterilizacao: reception.prazo_validacao_esterilizacao,
                integradores_quimicos_todas_caixas: reception.integradores_quimicos_todas_caixas,
                montagem_so_conforme_procedimento: reception.montagem_so_conforme_procedimento,
                observacao: reception.observacao,
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
    }
}
