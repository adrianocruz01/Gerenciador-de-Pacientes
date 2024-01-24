import { BadRequestException, Injectable } from '@nestjs/common';
import { PrismaService } from 'src/shared/db/libs/prisma/prisma.service';
import { CreateColaboradorDto } from '../dto/create-collab.dto';
import * as bcrypt from 'bcrypt';

@Injectable()
export class CreateCollabService {
    constructor(private readonly prisma: PrismaService) { }

    async execute(createColaboradorDto: CreateColaboradorDto) {
        if (!createColaboradorDto.cpf || !createColaboradorDto.nome || !createColaboradorDto.senha) {
            throw new BadRequestException('Nome, CPF e senha são campos obrigatórios.');
        }

        const colab = await this.prisma.colaborador.findFirst({
            where: {
                cpf: createColaboradorDto.cpf,
            }
        });

        if (colab) {
            throw new BadRequestException('Já existe um colaborador com este CPF.');
        }

        const hashedPassword = await bcrypt.hash(createColaboradorDto.senha, 10);

        await this.prisma.colaborador.create({
            data: {
                nome: createColaboradorDto.nome,
                cpf: createColaboradorDto.cpf,
                senha: hashedPassword,
                especialidade: createColaboradorDto.especialidade,
                matricula: createColaboradorDto.matricula,
                matricula_estado: createColaboradorDto.matricula_estado,
                dtcadastro: createColaboradorDto.dtcadastro,
                dtalteracao: createColaboradorDto.dtalteracao
            },
        });

        return `Colaborador cadastrado com sucesso!`;
    }
}
