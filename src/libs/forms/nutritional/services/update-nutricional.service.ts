import { Injectable, NotFoundException } from "@nestjs/common";
import { PrismaService } from "src/shared/db/libs/prisma/prisma.service";
import { UpdateFichaAvaliacaoNutricionalDto } from "../dto/update-nutricional.dto";


@Injectable()
export class UpdateFichaNutricionalService {
    constructor(private readonly prisma: PrismaService) { }

    async updateFichaNutricional(
        paciente_procedimento_id: number,
        updateData: UpdateFichaAvaliacaoNutricionalDto
    ) {

        const pacienteProcedimentoExists = await this.prisma.paciente_Procedimento.findUnique({
            where: { paciente_Procedimento_id: Number(paciente_procedimento_id) },
        });

        if (!pacienteProcedimentoExists) {
            throw new NotFoundException('Relação Paciente_Procedimento não encontrada!');
        }

        const fichanutricional = await this.prisma.ficha_Avaliacao_Nutricional.findFirst({
            where: {
                paciente_ProcedimentoPaciente_Procedimento_id: +paciente_procedimento_id,
            },
        });

        if (!fichanutricional) {
            throw new NotFoundException('Ficha Nutricional não encontrada!');
        }

         return await this.prisma.ficha_Avaliacao_Nutricional.update({
            where: { fch_avaliacao_nutricional_id: fichanutricional.fch_avaliacao_nutricional_id },
            data: updateData
        });

    }
}