import { Injectable, NotFoundException } from "@nestjs/common";
import { PrismaService } from "src/shared/db/libs/prisma/prisma.service";
import { CreateFichaTransferenciaPacienteDto } from "../dto/update-patien-prasfer.dto";


@Injectable()
export class UpdateFichaPatientTransferService {
    constructor(private readonly prisma: PrismaService) { }

    async updateFichaTransferPatient(
        paciente_procedimento_id: number,
        updateData: CreateFichaTransferenciaPacienteDto
    ) {

        const pacienteProcedimentoExists = await this.prisma.paciente_Procedimento.findUnique({
            where: { paciente_Procedimento_id: Number(paciente_procedimento_id) },
        });

        if (!pacienteProcedimentoExists) {
            throw new NotFoundException('Relação Paciente_Procedimento não encontrada!');
        }

        const fichpatienteTransfer = await this.prisma.ficha_Transferencia_Paciente.findFirst({
            where: {
                paciente_ProcedimentoPaciente_Procedimento_id: +paciente_procedimento_id,
            },
        });

        if (!fichpatienteTransfer) {
            throw new NotFoundException('Ficha transferencia Paciente não encontrada!');
        }

        return await this.prisma.ficha_Transferencia_Paciente.update({
            where: { fch_transferencia_paciente_id: fichpatienteTransfer.fch_transferencia_paciente_id },
            data: updateData
        });

    }
}