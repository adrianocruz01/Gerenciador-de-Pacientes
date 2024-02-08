import { Injectable, NotFoundException } from "@nestjs/common";
import { PrismaService } from "src/shared/db/libs/prisma/prisma.service";
import { FichaRecebimentoPacienteCirurgiaDto } from "../dto/update-reception.dto";


@Injectable()
export class UpdateFichaReceipt {
    constructor(private readonly prisma: PrismaService) { }

    async updateFichaReceipt(
        paciente_procedimento_id: number,
        updateData: FichaRecebimentoPacienteCirurgiaDto
    ) {

        const pacienteProcedimentoExists = await this.prisma.paciente_Procedimento.findUnique({
            where: { paciente_Procedimento_id: Number(paciente_procedimento_id) },
        });

        if (!pacienteProcedimentoExists) {
            throw new NotFoundException('Relação Paciente_Procedimento não encontrada!');
        }

        const fichareceipt = await this.prisma.ficha_Recebimento_Paciente_Cirurgia.findFirst({
            where: {
                paciente_ProcedimentoPaciente_Procedimento_id: +paciente_procedimento_id,
            },
        });

        if (!fichareceipt) {
            throw new NotFoundException('Ficha recebimento paciente não encontrada!');
        }

        return await this.prisma.ficha_Recebimento_Paciente_Cirurgia.update({
            where: { fch_recebimento_paciente_cirurgia_id: fichareceipt.fch_recebimento_paciente_cirurgia_id },
            data: updateData
        });

    }
}