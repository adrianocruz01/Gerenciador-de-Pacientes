import { Injectable, NotFoundException } from "@nestjs/common";
import { PrismaService } from "src/shared/db/libs/prisma/prisma.service";
import { CreateFichaEncaminhamentoPacienteDto } from "../dto/update-patient-apartamento.dto";


@Injectable()
export class UpdateFichaPatientApartamentService {
    constructor(private readonly prisma: PrismaService) { }

    async updateFichaPatientApartament(
        paciente_procedimento_id: number,
        updateData: CreateFichaEncaminhamentoPacienteDto
    ) {

        const pacienteProcedimentoExists = await this.prisma.paciente_Procedimento.findUnique({
            where: { paciente_Procedimento_id: Number(paciente_procedimento_id) },
        });

        if (!pacienteProcedimentoExists) {
            throw new NotFoundException('Relação Paciente_Procedimento não encontrada!');
        }

        const fichpatienteapartament = await this.prisma.ficha_Encaminhamento_Paciente.findFirst({
            where: {
                paciente_ProcedimentoPaciente_Procedimento_id: +paciente_procedimento_id,
            },
        });

        if (!fichpatienteapartament) {
            throw new NotFoundException('Ficha Encaminhamento Paciente não encontrada!');
        }

        return await this.prisma.ficha_Encaminhamento_Paciente.update({
            where: { fch_encaminhamento_paciente_id: fichpatienteapartament.fch_encaminhamento_paciente_id },
            data: updateData
        });

    }
}