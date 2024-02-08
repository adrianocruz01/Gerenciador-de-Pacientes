import { Injectable, NotFoundException } from "@nestjs/common";
import { PrismaService } from "src/shared/db/libs/prisma/prisma.service";
import { UpdateFichaControleMaterialDto } from "../dto/update-materoal-control.dto";

@Injectable()
export class UpdateMaterialControlService {
    constructor(private readonly prisma: PrismaService) { }

    async updateFichasMaterialControl(
        paciente_procedimento_id: number,
        updateData: UpdateFichaControleMaterialDto
    ) {

        const pacienteProcedimentoExists = await this.prisma.paciente_Procedimento.findUnique({
            where: { paciente_Procedimento_id: Number(paciente_procedimento_id) },
        });

        if (!pacienteProcedimentoExists) {
            throw new NotFoundException('Relação Paciente_Procedimento não encontrada!');
        }

        const fichamaterialcontrol = await this.prisma.ficha_Controle_Material.findFirst({
            where: {
                paciente_ProcedimentoPaciente_Procedimento_id: +paciente_procedimento_id,
            },
        });

        if (!fichamaterialcontrol) {
            throw new NotFoundException('Ficha Material de Controle não encontrada!');
        }

        return await this.prisma.ficha_Controle_Material.update({
            where: { fch_controle_material_id: fichamaterialcontrol.fch_controle_material_id},
            data: updateData 
        })
    }
}