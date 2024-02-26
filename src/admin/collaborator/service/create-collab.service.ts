import { BadRequestException, Injectable } from '@nestjs/common';
import { PrismaService } from 'src/shared/db/libs/prisma/prisma.service';
import { CreateColaboradorDto } from '../dto/create-collab.dto';
import * as bcrypt from 'bcrypt';
import { UserPayload } from 'src/auth/jwt-strategy';

@Injectable()
export class CreateCollabService {
  constructor(private readonly prisma: PrismaService) {}

  async execute(createColaboradorDto: CreateColaboradorDto, user: UserPayload) {
    if (!createColaboradorDto.cpf || !createColaboradorDto.nome || !createColaboradorDto.senha) {
      throw new BadRequestException('Nome, CPF e senha são campos obrigatórios.');
    }

    const colab = await this.prisma.colaborador.findFirst({
      where: {
        cpf: createColaboradorDto.cpf,
      },
    });

    if (colab) {
      throw new BadRequestException('Já existe um colaborador com este CPF.');
    }

    const hashedPassword = await bcrypt.hash(createColaboradorDto.senha, 10);

    const createdCollaborator = await this.prisma.colaborador.create({
      data: {
        nome: createColaboradorDto.nome,
        cpf: createColaboradorDto.cpf,
        senha: hashedPassword,
        especialidade: createColaboradorDto.especialidade,
        matricula: createColaboradorDto.matricula,
        matricula_estado: createColaboradorDto.matricula_estado,
        dtcadastro: createColaboradorDto.dtcadastro,
        dtalteracao: createColaboradorDto.dtalteracao,
      },
    });

    await this.prisma.log.create({
      data: {
        id_responsavel_mudanca: user.sub,
        flag_responsavel: 'C',
        acao: 'Cadastro de colaborador',
        atributo: null,
        id_afetado: createdCollaborator.colaborador_id,
        flag_afetado: 'C',
      },
    });

    return `Colaborador cadastrado com sucesso!`;
  }
}
