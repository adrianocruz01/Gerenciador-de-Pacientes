import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../../../shared/db/libs/prisma/prisma.service';
import { CreatePatientProcedureDto } from '../dto/create-patient-procedure.dto';

@Injectable()
export class PatientProcedureService {
  constructor(private readonly prisma: PrismaService) {}

  async create(pacienteId: number, { procedimentoId, dtregistro, hrregistro }: CreatePatientProcedureDto) {
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
        preenchido: false,
      },
      include: {
        Procedimento: true,
      },
    });
  }

  async findAllForms(patitentProcedureId: string) {
    return await this.prisma.paciente_Procedimento.findUnique({
      where: {
        paciente_Procedimento_id: +patitentProcedureId,
      },
      include: {
        Paciente: true,
        Procedimento: {
          include: {
            Ficha_Admissao_Paciente_Unidade: {
              where: {
                paciente_ProcedimentoPaciente_Procedimento_id: +patitentProcedureId,
              },
            },
            Ficha_Avaliacao_Nutricional: {
              where: {
                paciente_ProcedimentoPaciente_Procedimento_id: +patitentProcedureId,
              },
            },
            Ficha_Controle_Material: {
              where: {
                paciente_ProcedimentoPaciente_Procedimento_id: +patitentProcedureId,
              },
            },
            Ficha_Diagnostico_Enfermagem: {
              where: {
                paciente_ProcedimentoPaciente_Procedimento_id: +patitentProcedureId,
              },
            },
            Ficha_Encaminhamento_Paciente: {
              where: {
                paciente_ProcedimentoPaciente_Procedimento_id: +patitentProcedureId,
              },
            },
            Ficha_Encaminhamento_Paciente_Cirurgia: {
              where: {
                paciente_ProcedimentoPaciente_Procedimento_id: +patitentProcedureId,
              },
            },
            Ficha_Intraoperatoria: {
              where: {
                paciente_ProcedimentoPaciente_Procedimento_id: +patitentProcedureId,
              },
            },
            Ficha_Recebimento_Paciente_Cirurgia: {
              where: {
                paciente_ProcedimentoPaciente_Procedimento_id: +patitentProcedureId,
              },
            },
            Ficha_SAE_Triagem: {
              where: {
                paciente_ProcedimentoPaciente_Procedimento_id: +patitentProcedureId,
              },
            },
            Ficha_Transferencia_Paciente: {
              where: {
                paciente_ProcedimentoPaciente_Procedimento_id: +patitentProcedureId,
              },
            },
          },
        },
      },
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
