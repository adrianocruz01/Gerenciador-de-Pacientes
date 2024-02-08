import { Injectable, NotFoundException } from "@nestjs/common";
import { PrismaService } from "src/shared/db/libs/prisma/prisma.service";
import { UpdateFichaDiagnosticoEnfermagemDto } from "../dto/update-nursing-diagnosis.dto";

@Injectable()
export class UpdateFichaNursingDiagnosisService {
    constructor(private readonly prisma: PrismaService) { }

    async updateFichaNusingDiagnosis(
        paciente_procedimento_id: number,
        updateData: UpdateFichaDiagnosticoEnfermagemDto
    ) {

        const pacienteProcedimentoExists = await this.prisma.paciente_Procedimento.findUnique({
            where: { paciente_Procedimento_id: Number(paciente_procedimento_id) },
        });

        if (!pacienteProcedimentoExists) {
            throw new NotFoundException('Relação Paciente_Procedimento não encontrada!');
        }

        const fichadiagnosis = await this.prisma.ficha_Diagnostico_Enfermagem.findFirst({
            where: {
                paciente_ProcedimentoPaciente_Procedimento_id: +paciente_procedimento_id,
            },
        });

        if (!fichadiagnosis) {
            throw new NotFoundException('Ficha Diagnostico não encontrada!');
        }

        return await this.prisma.ficha_Diagnostico_Enfermagem.update({
            where: { fch_diagnostico_enfermagem_id: fichadiagnosis.fch_diagnostico_enfermagem_id },
            data: updateData
        });
    }
}