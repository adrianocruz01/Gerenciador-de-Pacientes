import { BadRequestException, Injectable } from '@nestjs/common';
import { PrismaService } from 'src/shared/db/libs/prisma/prisma.service';
import { CreateNursingDiagnosisDto } from '../dto/create-nursing-diagnosis.dto';

@Injectable()
export class NursingDiagnosisService {
  constructor(private readonly prisma: PrismaService) {}

  async execute(createNursingDiagnosisDto: CreateNursingDiagnosisDto, colaborador_id: number) {
    const { paciente_id, procedimento_id, paciente_procedimento_id } = createNursingDiagnosisDto;

    const exists = await this.prisma.ficha_Diagnostico_Enfermagem.findFirst({
      where: { paciente_ProcedimentoPaciente_Procedimento_id: paciente_procedimento_id },
    });

    if (exists) {
      throw new BadRequestException('Esta ficha já existe para este paciente e procedimento');
    }

    const create = await this.prisma.ficha_Diagnostico_Enfermagem.create({
      data: {
        fch_diagnostico_enfermagem_status: createNursingDiagnosisDto.fch_diagnostico_enfermagem_status,
        insonia_relacionado_ansiedade: createNursingDiagnosisDto.insonia_relacionado_ansiedade,
        deficit_autocuidado_banho: createNursingDiagnosisDto.deficit_autocuidado_banho,
        retencao_urinario: createNursingDiagnosisDto.retencao_urinario,
        deambulacao_projudicada_dor: createNursingDiagnosisDto.deambulacao_projudicada_dor,
        nausea_medo_ansiedade: createNursingDiagnosisDto.nausea_medo_ansiedade,
        ansiedade_relacionado_estressores: createNursingDiagnosisDto.ansiedade_relacionado_estressores,
        risco_lesao_presao: createNursingDiagnosisDto.risco_lesao_presao,
        risco_reacao_alergica: createNursingDiagnosisDto.risco_reacao_alergica,
        risco_lesao_trato_urinario: createNursingDiagnosisDto.risco_lesao_trato_urinario,
        risco_queda_hipontensao: createNursingDiagnosisDto.risco_queda_hipontensao,
        risco_tromboembolismo_veneso: createNursingDiagnosisDto.risco_tromboembolismo_veneso,
        risco_hiportemia_perioperatoria: createNursingDiagnosisDto.risco_hiportemia_perioperatoria,
        observacao: createNursingDiagnosisDto.observacao,
        verificacao_ssvv: createNursingDiagnosisDto.verificacao_ssvv,
        observar_posicionamento_paciente: createNursingDiagnosisDto.observar_posicionamento_paciente,
        observar_nauseas_vomitos: createNursingDiagnosisDto.observar_nauseas_vomitos,
        atentar_queixar_dor: createNursingDiagnosisDto.atentar_queixar_dor,
        estimular_deambulacao: createNursingDiagnosisDto.estimular_deambulacao,
        observar_dreno_sonda: createNursingDiagnosisDto.observar_dreno_sonda,
        realizar_protecao_proeminencias_osseas: createNursingDiagnosisDto.realizar_protecao_proeminencias_osseas,
        observar_local_puncao_venosa: createNursingDiagnosisDto.observar_local_puncao_venosa,
        manter_grades_elevadas: createNursingDiagnosisDto.manter_grades_elevadas,
        manter_monitorizacao_hemodinamica: createNursingDiagnosisDto.manter_monitorizacao_hemodinamica,
        realizar_banho_aspersao: createNursingDiagnosisDto.realizar_banho_aspersao,
        realizar_curativo: createNursingDiagnosisDto.realizar_curativo,
        estimular_eliminacao_espontanea: createNursingDiagnosisDto.estimular_eliminacao_espontanea,
        realizar_sondagem_vesical: createNursingDiagnosisDto.realizar_sondagem_vesical,
        manter_paciente_aquecido: createNursingDiagnosisDto.manter_paciente_aquecido,
        checar_identificador_alergia: createNursingDiagnosisDto.checar_identificador_alergia,
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
        atributo: 'Ficha de diagnóstico de enfermagem',
        id_afetado: paciente_id,
        flag_afetado: 'P',
      },
    });

    return create;
  }
}
