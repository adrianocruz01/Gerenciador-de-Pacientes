import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../../../shared/db/libs/prisma/prisma.service';
import { CreatePatientProcedureDto } from '../dto/create-patient-procedure.dto';
import { SearchPatientProcedureDto } from '../dto/search-patient-procedure.dto';

@Injectable()
export class PatientProcedureService {
  constructor(private readonly prisma: PrismaService) {}

  async create(
    pacienteId: number,
    { procedimentoId, dtregistro, hrregistro }: CreatePatientProcedureDto,
  ) {
    const patient = await this.prisma.paciente.findUnique({
      where: { paciente_id: pacienteId },
    });

    if (!patient) throw new NotFoundException('Paciente não cadastrado');

    return await this.prisma.paciente_Procedimento.create({
      data: {
        paciente_id: pacienteId,
        procedimento_id: procedimentoId,
        dtregistro: dtregistro,
        hrregistro: hrregistro,
      },
      include: {
        Procedimento: true,
      },
    });
  }

  async findAll(
    patientId: number,
    searchProcedureDto: SearchPatientProcedureDto,
  ) {
    return await this.prisma.paciente_Procedimento.findMany({
      where: {
        AND: {
          paciente_id: +patientId,
          Procedimento: {
            nome: !!searchProcedureDto?.nome
              ? {
                  contains: searchProcedureDto.nome,
                }
              : undefined,
            descricao: !!searchProcedureDto?.descricao
              ? {
                  contains: searchProcedureDto.descricao,
                }
              : undefined,
          },
        },
      },
      include: { Procedimento: true },
    });
  }

  async remove(patientId: number, id: string) {
    const query = { paciente_id: +patientId, paciente_Procedimento_id: +id };
    const procedure = await this.prisma.paciente_Procedimento.findUnique({
      where: query,
    });

    if (procedure) {
      await this.prisma.paciente_Procedimento.delete({
        where: query,
      });
    }
    return procedure;
  }
}
