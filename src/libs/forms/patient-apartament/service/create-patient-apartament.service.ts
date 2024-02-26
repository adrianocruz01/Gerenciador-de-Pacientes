import { BadRequestException, Injectable } from '@nestjs/common';
import { PrismaService } from 'src/shared/db/libs/prisma/prisma.service';
import { CreatePatientApartamentPacienteDto } from '../dto/create-patient-apartament.dto';

@Injectable()
export class PatientApartamentService {
  constructor(private readonly prisma: PrismaService) {}

  async execute(fichaEncaminhamentoPacienteData: CreatePatientApartamentPacienteDto, colaborador_id: number) {
    const { paciente_id, procedimento_id, paciente_procedimento_id } = fichaEncaminhamentoPacienteData;

    const exists = await this.prisma.ficha_Encaminhamento_Paciente.findFirst({
      where: { paciente_ProcedimentoPaciente_Procedimento_id: paciente_procedimento_id },
    });

    if (exists) {
      throw new BadRequestException('Esta ficha já existe para este paciente e procedimento');
    }

    const create = await this.prisma.ficha_Encaminhamento_Paciente.create({
      data: {
        fch_encaminhamento_paciente_status: fichaEncaminhamentoPacienteData.fch_encaminhamento_paciente_status,
        encaminhamento_horario: fichaEncaminhamentoPacienteData.encaminhamento_horario,
        cateter_venoso: fichaEncaminhamentoPacienteData.cateter_venoso,
        cateter_venoso_local: fichaEncaminhamentoPacienteData.cateter_venoso_local,
        sonda_vesical_demora: fichaEncaminhamentoPacienteData.sonda_vesical_demora,
        dreno: fichaEncaminhamentoPacienteData.dreno,
        dreno_qual: fichaEncaminhamentoPacienteData.dreno_qual,
        dreno_local: fichaEncaminhamentoPacienteData.dreno_local,
        peca_patologica: fichaEncaminhamentoPacienteData.peca_patologica,
        prontuario_completo: fichaEncaminhamentoPacienteData.prontuario_completo,
        prontuario_completo_observacao: fichaEncaminhamentoPacienteData.prontuario_completo_observacao,
        Paciente: {
          connect: {
            paciente_id: +paciente_id,
          },
        },
        Colaborador: {
          connect: { colaborador_id: colaborador_id },
        },
        Procedimento: {
          connect: {
            procedimento_id: +procedimento_id,
          },
        },
        Paciente_Procedimento: {
          connect: {
            paciente_Procedimento_id: +paciente_procedimento_id,
          },
        },
      },
    });

    await this.prisma.log.create({
      data: {
        id_responsavel_mudanca: colaborador_id,
        flag_responsavel: 'C',
        acao: 'Cadastro de ficha',
        atributo: 'Ficha de encaminhamento paciente para o apartamento',
        id_afetado: paciente_id,
        flag_afetado: 'P',
      },
    });

    return create;
  }
}
