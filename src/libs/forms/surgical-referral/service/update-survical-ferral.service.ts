import { Injectable, NotFoundException } from "@nestjs/common";
import { PrismaService } from "src/shared/db/libs/prisma/prisma.service";
import { FichaEncaminhamentoPacienteCirurgiaDto } from "../dto/update-survical.dto";


@Injectable()
export class UpdateFichaSurgical {
    constructor(private readonly prisma: PrismaService) { }

    async updateFichaSurgical(
        paciente_procedimento_id: number,
        updateData: FichaEncaminhamentoPacienteCirurgiaDto
    ) {

        const pacienteProcedimentoExists = await this.prisma.paciente_Procedimento.findUnique({
            where: { paciente_Procedimento_id: Number(paciente_procedimento_id) },
        });

        if (!pacienteProcedimentoExists) {
            throw new NotFoundException('Relação Paciente_Procedimento não encontrada!');
        }

        const fichasurgical = await this.prisma.ficha_Encaminhamento_Paciente_Cirurgia.findFirst({
            where: {
                paciente_ProcedimentoPaciente_Procedimento_id: +paciente_procedimento_id,
            },
        });

        if (!fichasurgical) {
            throw new NotFoundException('Ficha Encaminhamento Cirurgico não encontrada!');
        }

        return await this.prisma.ficha_Encaminhamento_Paciente_Cirurgia.update({
            where: { fch_encaminhamento_paciente_cirurgia_id: fichasurgical.fch_encaminhamento_paciente_cirurgia_id },
            data: updateData
        });
    }
}