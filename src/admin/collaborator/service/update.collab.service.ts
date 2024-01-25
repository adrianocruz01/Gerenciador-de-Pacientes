import { BadRequestException, Injectable } from "@nestjs/common";
import { PrismaService } from "src/shared/db/libs/prisma/prisma.service";
import { UpdateColaboradorDto } from "../dto/update.collab.dto";

@Injectable()
export class UpdateCollabService {
    constructor(private readonly prisma: PrismaService) {}

    async update(id: number, updateColaboradorDto: UpdateColaboradorDto) {
        const colab = await this.prisma.colaborador.findUnique({
            where: { colaborador_id: id },
        });

        if (!colab) {
            throw new BadRequestException(`Colaborador com ID ${id} não encontrado!`);
        }

        // Realize a atualização do colaborador
        const updatedColab = await this.prisma.colaborador.update({
            where: { colaborador_id: id },
            data: updateColaboradorDto,
        });

        // Compare o estado anterior com o estado atual para determinar o que foi alterado
        const changes: Partial<UpdateColaboradorDto> = {};

        for (const key in updateColaboradorDto) {
            if (colab[key] !== updatedColab[key]) {
                changes[key] = updatedColab[key];
            }
        }

        return changes;
    }
}
