import { Injectable, NotFoundException } from "@nestjs/common";
import { PrismaService } from "src/shared/db/libs/prisma/prisma.service";
import { UpdateColaboradorDto } from "../dto/update.collab.dto";


@Injectable()
export class UpdateCollabService {
    constructor(private readonly prisma: PrismaService) {}

    async update(id: number, updateColaboradorDto: UpdateColaboradorDto) {

        const colab = await this.prisma.colaborador.findUnique({
            where:{ 
                colaborador_id: id,
             },
        });

        if(!colab) {
            throw new NotFoundException(`Colaborador com ID ${id} não encontrado!`);
        }

        return await this.prisma.colaborador.update({
            where: { colaborador_id: id },
            data: updateColaboradorDto,
        });
    }
}
