import { Injectable, NotFoundException } from '@nestjs/common';
import { ProcedureDto } from '../dto/procedure.dto';
import { PrismaService } from '../../../shared/db/libs/prisma/prisma.service';
import { UpdateProcedureDto } from '../dto/update-procedure.dto';
import { SearchProcedureDto } from '../dto/search-procedure.dto';

@Injectable()
export class ProcedureService {
  constructor(private readonly prisma: PrismaService) {}

  async create(procedureDTO: ProcedureDto) {
    return await this.prisma.procedimento.create({
      data: procedureDTO,
    });
  }

  async update(id: string, procedureDTO: UpdateProcedureDto) {
    const procedure = await this.prisma.procedimento.findUnique({
      where: { procedimento_id: +id },
    });
    if (!procedure) {
      throw new NotFoundException('Procedimento não cadastrado');
    }

    return await this.prisma.procedimento.update({
      where: { procedimento_id: procedure.procedimento_id },
      data: {
        ...procedureDTO,
      },
    });
  }

  async findAll(searchPatientDto: SearchProcedureDto) {
    return await this.prisma.procedimento.findMany({
      where: {
        nome: !!searchPatientDto?.nome
          ? {
              contains: searchPatientDto.nome,
            }
          : undefined,
        descricao: !!searchPatientDto?.descricao
          ? {
              contains: searchPatientDto.descricao,
            }
          : undefined,
      },
    });
  }

  async remove(id: string) {
    const procedure = await this.prisma.procedimento.findUnique({
      where: { procedimento_id: +id },
    });

    if (procedure) {
      await this.prisma.procedimento.delete({
        where: { procedimento_id: procedure.procedimento_id },
      });
    }
    return procedure;
  }
}
