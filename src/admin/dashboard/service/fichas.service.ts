import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../../shared/db/libs/prisma/prisma.service';

@Injectable()
export class FichasAllDashboardService {
  constructor(private readonly prisma: PrismaService) {}

  async getFichas(queryParams: { nome_procedimento?: string}) {
    try {
      const pacienteProcedimentos = await this.prisma.paciente_Procedimento.findMany({
        where: {
          Procedimento: {
            nome: queryParams.nome_procedimento,
          },
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

      const result = pacienteProcedimentos.map((pacienteProcedimento) => ({
        id_ficha: pacienteProcedimento.paciente_Procedimento_id,
        nome_paciente: pacienteProcedimento.Paciente.nome,
        nome_ficha: this.getNomeFicha(pacienteProcedimento),
        nome_procedimento: pacienteProcedimento.Procedimento?.nome || '',
        data_procedimento: pacienteProcedimento.dtregistro.toISOString(),
      }));

      return result;
    } catch (error) {
      throw error;
    }
  }

  private getNomeFicha(pacienteProcedimento) {
    if (pacienteProcedimento.Ficha_Admissao_Paciente_Unidade) {
      return `Ficha Admissao Paciente Unidade`;
    }
    if (pacienteProcedimento.Ficha_Avaliacao_Nutricional) {
      return "Ficha Avaliacao Nutricional";
    }
    if (pacienteProcedimento.Ficha_Controle_Material) {
      return "Ficha Controle Material";
    }
    if (pacienteProcedimento.Ficha_Diagnostico_Enfermagem) {
      return "Ficha Diagnostico Enfermagem";
    }
    if (pacienteProcedimento.Ficha_Encaminhamento_Paciente) {
      return "Ficha Encaminhamento Paciente";
    }
    if (pacienteProcedimento.Ficha_Encaminhamento_Paciente_Cirurgia) {
      return "Ficha Encaminhamento Paciente Cirurgia";
    }
    if (pacienteProcedimento.Ficha_Intraoperatoria) {
      return "Ficha Intraoperatoria";
    }
    if (pacienteProcedimento.Ficha_Recebimento_Paciente_Cirurgia) {
      return "Ficha Recebimento Paciente Cirurgia";
    }
    if (pacienteProcedimento.Ficha_SAE_Triagem) {
      return "Ficha SAE Triagem";
    }
    if (pacienteProcedimento.Ficha_Transferencia_Paciente) {
      return "Ficha Transferencia Paciente";
    }
    return '';
  }
}
