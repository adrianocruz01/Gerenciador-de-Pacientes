import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from 'src/shared/db/libs/prisma/prisma.service';

@Injectable()
export class CollabService {
    constructor(private readonly prisma: PrismaService) {}

    async getAllCollabs() {
        const collabs = await this.prisma.colaborador.findMany();
        if (!collabs || collabs.length === 0) {
            throw new NotFoundException('Nenhum colaborador encontrado!');
        }
        return collabs;
    }
}
