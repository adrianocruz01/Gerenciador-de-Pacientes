import { BadRequestException, Injectable } from '@nestjs/common';
import { PrismaService } from 'src/shared/db/libs/prisma/prisma.service';

@Injectable()
export class CollabService {
    constructor(private readonly prisma: PrismaService) {}

    async getAllCollabs() {
        const collabs = await this.prisma.colaborador.findMany({
            where: {
                OR: [
                    { status: null },
                    { status: "A" },
                ],
            }
        });
        if (!collabs || collabs.length === 0) {
            throw new BadRequestException('Nenhum colaborador encontrado!');
        }
        return collabs.map((collab) => ({
            colaborador_id: collab.colaborador_id,
            nome: collab.nome,
            cpf: collab.cpf,
            especialidade: collab.especialidade,
            matricula: collab.matricula,
            matricula_estado: collab.matricula_estado,
            status: collab.status,
        }));
    }
}
