import { BadRequestException, Injectable } from "@nestjs/common";
import { SearchCollabDto } from "../dto/search-collab.dto";
import { PrismaService } from "src/shared/db/libs/prisma/prisma.service";


@Injectable()
export class SearchByCPFCollabService {
    constructor(private readonly prisma: PrismaService) { }

    async execute(searchCollabDto: SearchCollabDto) {

        if (!searchCollabDto.cpf) {
            throw new BadRequestException("CPF é obrigatório!");
        }
        const colab = await this.prisma.colaborador.findMany({
            where: {
                cpf: searchCollabDto.cpf,
            }
        });

        if (!colab || colab.length === 0) {
            throw new BadRequestException('Colaborador não existe');
        }

        // nome: patient.nome,
        return  colab
    }
}