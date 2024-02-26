import { BadRequestException, Injectable } from '@nestjs/common';
import { CreateIntraoperativeDto } from '../dto/create-intraoperative.dto';
import { PrismaService } from 'src/shared/db/libs/prisma/prisma.service';

@Injectable()
export class IntraoperativeService {
  constructor(private readonly prisma: PrismaService) {}

  async create(intraoperativeData: CreateIntraoperativeDto, colaborador_id: number) {
    const { paciente_id, procedimento_id, paciente_procedimento_id } = intraoperativeData;

    const exists = await this.prisma.ficha_Intraoperatoria.findFirst({
      where: {
        paciente_ProcedimentoPaciente_Procedimento_id: +paciente_procedimento_id,
      },
    });

    if (exists) {
      throw new BadRequestException('Esta ficha já foi preenchida para este procedimento');
    }

    const create = await this.prisma.ficha_Intraoperatoria.create({
      data: {
        questionar_paciente: intraoperativeData.questionar_paciente,
        termos_consentimento_assinados: intraoperativeData.termos_consentimento_assinados,
        sitio_demarcado: intraoperativeData.sitio_demarcado,
        sitio_demarcado_nao_aplica: intraoperativeData.sitio_demarcado_nao_aplica,
        oximetro_instalado_funcionando: intraoperativeData.oximetro_instalado_funcionando,
        eletrodos_pneumatico_pa: intraoperativeData.eletrodos_pneumatico_pa,
        eletrodos_pneumatico_mmhg: intraoperativeData.eletrodos_pneumatico_mmhg,
        paciente_alergico: intraoperativeData.paciente_alergico,
        paciente_alergico_qual: intraoperativeData.paciente_alergico_qual,
        risco_broncoaspiracao: intraoperativeData.risco_broncoaspiracao,
        profilaxia_para_tev: intraoperativeData.profilaxia_para_tev,
        profilaxia_para_tev_horario: intraoperativeData.profilaxia_para_tev_horario,
        profilaxia_para_tev_qual: intraoperativeData.profilaxia_para_tev_qual,
        antibioticoprofilaxia: intraoperativeData.antibioticoprofilaxia,
        antibioticoprofilaxia_horario: intraoperativeData.antibioticoprofilaxia_horario,
        acesso_venoso_periferico: intraoperativeData.acesso_venoso_periferico,
        acesso_venoso_periferico_local: intraoperativeData.acesso_venoso_periferico_local,
        pam: intraoperativeData.pam,
        pam_local: intraoperativeData.pam_local,
        acesso_dificil: intraoperativeData.acesso_dificil,
        perda_acesso: intraoperativeData.perda_acesso,
        tipo_fixacao: intraoperativeData.tipo_fixacao,
        posicao_operatorio_trendelemburg: intraoperativeData.posicao_operatorio_trendelemburg,
        posicao_operatorio_lateral_direira: intraoperativeData.posicao_operatorio_lateral_direira,
        posicao_operatorio_lateral_esquerda: intraoperativeData.posicao_operatorio_lateral_esquerda,
        posicao_operatorio_lateral_dorsal: intraoperativeData.posicao_operatorio_lateral_dorsal,
        posicao_operatorio_lateral_ventral: intraoperativeData.posicao_operatorio_lateral_ventral,
        posicao_operatorio_lateral_semiGinecologica: intraoperativeData.posicao_operatorio_lateral_semiGinecologica,
        posicao_operatorio_lateral_Ginecologica: intraoperativeData.posicao_operatorio_lateral_Ginecologica,
        assistencia_ventilosa_ar_ambiente: intraoperativeData.assistencia_ventilosa_ar_ambiente,
        assistencia_ventilosa_masc_02: intraoperativeData.assistencia_ventilosa_masc_02,
        assistencia_ventilosa_catete_02: intraoperativeData.assistencia_ventilosa_catete_02,
        assistencia_ventilosa_mascara_laringea: intraoperativeData.assistencia_ventilosa_mascara_laringea,
        assistencia_ventilosa_mascara_venture: intraoperativeData.assistencia_ventilosa_mascara_venture,
        assistencia_ventilosa_tubo_endotraqueal: intraoperativeData.assistencia_ventilosa_tubo_endotraqueal,
        mobilizacao: intraoperativeData.mobilizacao,
        implantacao_materiais_equipamentos_disponiveis:
          intraoperativeData.implantacao_materiais_equipamentos_disponiveis,
        prontuario_preenchido: intraoperativeData.prontuario_preenchido,
        mobilizacao_local: intraoperativeData.mobilizacao_local,
        meia_elastica: intraoperativeData.meia_elastica,
        ataduras: intraoperativeData.ataduras,
        bota_pneumatica: intraoperativeData.bota_pneumatica,
        higienizacao_clorex_dergemate: intraoperativeData.higienizacao_clorex_dergemate,
        higienizacao_alcoolica: intraoperativeData.higienizacao_alcoolica,
        higienizacao_aquosa: intraoperativeData.higienizacao_aquosa,
        higienizacao_responsavel: intraoperativeData.higienizacao_responsavel,
        placa_bisturi: intraoperativeData.placa_bisturi,
        placa_bisturi_localizacao: intraoperativeData.placa_bisturi_localizacao,
        placa_bisturi_frequencia: intraoperativeData.placa_bisturi_frequencia,
        Paciente: {
          connect: {
            paciente_id: +paciente_id,
          },
        },
        Colaborador: {
          connect: { colaborador_id: +colaborador_id },
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
        atributo: 'Ficha Intraoperatória',
        id_afetado: paciente_id,
        flag_afetado: 'P',
      },
    });

    return create;
  }
}
