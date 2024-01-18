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
    return await this.prisma.paciente_Procedimento.findFirst({
      where: {
        paciente_Procedimento_id: +patitentProcedureId,
      },
      include: {
        Paciente: true,
        Procedimento: true,
        Ficha_Admissao_Paciente_Unidade: true,
        Ficha_Avaliacao_Nutricional: true,
        Ficha_Controle_Material: true,
        Ficha_Diagnostico_Enfermagem: true,
        Ficha_Encaminhamento_Paciente: true,
        Ficha_Encaminhamento_Paciente_Cirurgia: true,
        Ficha_Intraoperatoria: true,
        Ficha_Recebimento_Paciente_Cirurgia: true,
        Ficha_SAE_Triagem: true,
        Ficha_Transferencia_Paciente: true,
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
