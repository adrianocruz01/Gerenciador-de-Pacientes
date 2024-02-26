import { BadRequestException, Injectable } from '@nestjs/common';
import { CreateAdmissionDto } from '../dto/create-admission.dto';
import { PrismaService } from 'src/shared/db/libs/prisma/prisma.service';

@Injectable()
export class PatientAdmissionService {
  constructor(private readonly prisma: PrismaService) {}

  async execute(admission: CreateAdmissionDto, colaborador_id: number) {
    const { paciente_id, procedimento_id, paciente_procedimento_id } = admission;

    const exists = await this.prisma.ficha_Admissao_Paciente_Unidade.findFirst({
      where: { paciente_ProcedimentoPaciente_Procedimento_id: paciente_procedimento_id },
    });

    if (exists) {
      throw new BadRequestException('Essa ficha já foi preenchida neste procedimento');
    }

    const create = await this.prisma.ficha_Admissao_Paciente_Unidade.create({
      data: {
        pulseira_identificacao: admission.pulseira_identificacao,
        fumante: admission.fumante,
        alergia_intolerancia_medicamentosa: admission.alergia_intolerancia_medicamentosa,
        alergia_intolerancia_medicamentosa_qual: admission.alergia_intolerancia_medicamentosa_qual,
        alergia_intolerancia_alimentar: admission.alergia_intolerancia_alimentar,
        alergia_intolerancia_alimentar_qual: admission.alergia_intolerancia_alimentar_qual,
        jejum_inicio_hora: admission.jejum_inicio_hora,
        jejum_inicio_dia: admission.jejum_inicio_dia,
        doenca_previa: admission.doenca_previa,
        doenca_previa_qual: admission.doenca_previa_qual,
        medicacao_continua: admission.medicacao_continua,
        medicacao_continua_qual: admission.medicacao_continua_qual,
        tricotomia: admission.tricotomia,
        tricotomia_regiao: admission.tricotomia_regiao,
        tricotomia_metodo: admission.tricotomia_metodo,
        banho_pre_operatorio: admission.banho_pre_operatorio,
        banho_pre_operatorio_horario: admission.banho_pre_operatorio_horario,
        banho_pre_operatorio_dia: admission.banho_pre_operatorio_dia,
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
        atributo: 'Ficha de admissão do paciente na unidade',
        id_afetado: paciente_id,
        flag_afetado: 'P',
      },
    });

    return create;
  }
}
