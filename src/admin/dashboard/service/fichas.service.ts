import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../../shared/db/libs/prisma/prisma.service';

const fichas = {
  Ficha_Admissao_Paciente_Unidade: "Ficha Admissao Paciente Unidade",
  Ficha_Avaliacao_Nutricional: "Ficha Avaliacao Nutricional",
  Ficha_Controle_Material: "Ficha Controle Material",
  Ficha_Diagnostico_Enfermagem: "Ficha Diagnostico Enfermagem",
  Ficha_Encaminhamento_Paciente: "Ficha Encaminhamento Paciente",
  Ficha_Encaminhamento_Paciente_Cirurgia: "Ficha Encaminhamento Paciente Cirurgia",
  Ficha_Intraoperatoria: "Ficha Intraoperatoria",
  Ficha_Recebimento_Paciente_Cirurgia: "Ficha Recebimento Paciente Cirurgia",
  Ficha_SAE_Triagem: "Ficha SAE Triagem",
  Ficha_Transferencia_Paciente: "Ficha Transferencia Paciente",
};
@Injectable()
export class FichasAllDashboardService {
  constructor(private readonly prisma: PrismaService) { }

  async getFichas(queryParams: { nome_procedimento?: string }) {
    try {
      const result = [];

      const fichasKeys = Object.keys(fichas);

      for (const key of fichasKeys) {
        const fichaData = await this.prisma[key].findMany({
          include: {
            Procedimento: true,
            Paciente: true,
            Paciente_Procedimento: true,
          },
        });

        fichaData.map(
          item => {
            result.push({
              nome_ficha: fichas[key],
              nome_procedimento: item?.Procedimento?.nome,
              nome_paciente: item?.Paciente?.nome,
              data_procedimento: item?.Paciente_Procedimento.dtregistro

            });
          }
        );
      }

      return result;
    } catch (error) {
      throw error;
    }
  }
}
