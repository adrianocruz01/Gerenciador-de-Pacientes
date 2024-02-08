import { Injectable, NotFoundException } from "@nestjs/common";
import { PrismaService } from "src/shared/db/libs/prisma/prisma.service";
import { FichaAdmissaoPacienteUnidadeDto } from "../dto/update-admission.dto";


@Injectable()
export class UpdateFichaPatientAdmissionService {
    constructor(private readonly prisma: PrismaService) { }

    async updateFichaPatientAdmission(
        paciente_procedimento_id: number,
        updateData: FichaAdmissaoPacienteUnidadeDto
    ) {

        const pacienteProcedimentoExists = await this.prisma.paciente_Procedimento.findUnique({
            where: { paciente_Procedimento_id: Number(paciente_procedimento_id) },
        });

        if (!pacienteProcedimentoExists) {
            throw new NotFoundException('Relação Paciente_Procedimento não encontrada!');
        }

        const fichpatientadmission = await this.prisma.ficha_Admissao_Paciente_Unidade.findFirst({
            where: {
                paciente_ProcedimentoPaciente_Procedimento_id: +paciente_procedimento_id,
            },
        });

        if (!fichpatientadmission) {
            throw new NotFoundException('Ficha Paciente Admissão não encontrada!');
        }

         return await this.prisma.ficha_Admissao_Paciente_Unidade.update({
            where: { fch_admissao_paciente_unidade_id: fichpatientadmission.fch_admissao_paciente_unidade_id },
            data: updateData
        });

    }
}