import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../../../shared/db/libs/prisma/prisma.service';
import { CreatePatientProcedureDto } from '../dto/create-patient-procedure.dto';
import { UpdatePatientProcedureDto } from '../dto/update-patient-procedure.dto';
import { SearchPatientProcedureDto } from '../dto/search-patient-procedure.dto';

@Injectable()
export class PatientProcedureService {
  constructor(private readonly prisma: PrismaService) {}

  async create(patientId: number, procedureDTO: CreatePatientProcedureDto) {
    return await this.prisma.paciente_Procedimento.create({
      data: {
        paciente_id: patientId,
        procedimento_id: procedureDTO.procedimento_id,
        status: procedureDTO.status,
      },
    });
  }

  async update(
    patientId: number,
    id: number,
    procedureDTO: UpdatePatientProcedureDto,
  ) {
    const procedure = await this.prisma.paciente_Procedimento.findUnique({
      where: { paciente_id: +patientId, paciente_Procedimento_id: +id },
    });
    if (!procedure) throw new NotFoundException('Procedimento não cadastrado');

    return await this.prisma.paciente_Procedimento.update({
      where: {
        paciente_id: +patientId,
        paciente_Procedimento_id: procedure.paciente_Procedimento_id,
      },
      data: {
        procedimento_id:
          procedureDTO.procedimento_id ?? procedure.procedimento_id,
        status: procedureDTO.status ?? procedure.status,
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
