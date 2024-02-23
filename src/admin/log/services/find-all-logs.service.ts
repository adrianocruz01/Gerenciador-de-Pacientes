import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/shared/db/libs/prisma/prisma.service';

@Injectable()
export class FindAllLogsService {
  constructor(private readonly prisma: PrismaService) {}

  async findAll() {
    const logs = await this.prisma.log.findMany();

    const result = await Promise.all(
      logs.map(async (log) => {
        let nomeResponsavel = null;
        let nomeAfetado = null;

        if (log.flag_responsavel === 'C') {
          const collaborator = await this.prisma.colaborador.findUnique({
            where: {
              colaborador_id: log.id_responsavel_mudanca,
            },
          });

          nomeResponsavel = collaborator.nome;
        }

        if (log.flag_responsavel === 'P') {
          const paciente = await this.prisma.paciente.findUnique({
            where: {
              paciente_id: log.id_responsavel_mudanca,
            },
          });

          nomeResponsavel = paciente.nome;
        }

        if (log.flag_afetado === 'C') {
          const collaborator = await this.prisma.colaborador.findUnique({
            where: {
              colaborador_id: log.id_afetado,
            },
          });

          nomeAfetado = collaborator.nome;
        }

        if (log.flag_afetado === 'P') {
          const paciente = await this.prisma.paciente.findUnique({
            where: {
              paciente_id: log.id_afetado,
            },
          });

          nomeAfetado = paciente.nome;
        }

        return {
          id: log.id,
          responsavel: nomeResponsavel,
          acao: log.acao,
          atributo: log.atributo,
          afetado: nomeAfetado,
          data: log.createdAt,
        };
      }),
    );

    return result;
  }
}
