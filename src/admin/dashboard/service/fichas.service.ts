import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../../shared/db/libs/prisma/prisma.service';

const fichas = {
  Ficha_Admissao_Paciente_Unidade: 'Ficha Admissao Paciente Unidade',
  Ficha_Avaliacao_Nutricional: 'Ficha Avaliacao Nutricional',
  Ficha_Controle_Material: 'Ficha Controle Material',
  Ficha_Diagnostico_Enfermagem: 'Ficha Diagnostico Enfermagem',
  Ficha_Encaminhamento_Paciente: 'Ficha Encaminhamento Paciente',
  Ficha_Encaminhamento_Paciente_Cirurgia: 'Ficha Encaminhamento Paciente Cirurgia',
  Ficha_Intraoperatoria: 'Ficha Intraoperatoria',
  Ficha_Recebimento_Paciente_Cirurgia: 'Ficha Recebimento Paciente Cirurgia',
  Ficha_SAE_Triagem: 'Ficha SAE Triagem',
  Ficha_Transferencia_Paciente: 'Ficha Transferencia Paciente',
};

@Injectable()
export class FichasAllDashboardService {
  constructor(private readonly prisma: PrismaService) {}

  async getFichas(queryParams: { colaborador_id?: string; paciente_id?: string; paciente_procedimento_id?: string }) {
    try {
      const result = [];
      const fichasKeys = Object.keys(fichas);

      for (const key of fichasKeys) {
        const whereCondition: any = {};

        if (queryParams.colaborador_id) {
          whereCondition.colaborador_id = Number(queryParams.colaborador_id);
        }

        if (queryParams.paciente_id) {
          whereCondition.paciente_id = Number(queryParams.paciente_id);
        }

        if (queryParams.paciente_procedimento_id) {
          whereCondition.paciente_ProcedimentoPaciente_Procedimento_id = Number(queryParams.paciente_procedimento_id);
        }

        const fichaData = await this.prisma[key].findMany({
          include: {
            Procedimento: true,
            Paciente: true,
            Paciente_Procedimento: true,
          },
          where: whereCondition,
        });

        fichaData.map((item) => {
          let ficha_id_attr_name = `fch${key.toLocaleLowerCase().split('ficha')[1]}_id`;

          if (key.includes('SAE')) {
            ficha_id_attr_name = 'fch_SAE_Triagem_id';
          }

          result.push({
            id: Number(
              `${item[ficha_id_attr_name]}${item.Paciente_Procedimento.paciente_Procedimento_id}${item.Paciente.paciente_id}`,
            ),
            id_ficha: item[ficha_id_attr_name],
            nome_ficha: fichas[key],
            nome_procedimento: item?.Procedimento?.nome,
            nome_paciente: item?.Paciente?.nome,
            data_procedimento: item?.Paciente_Procedimento.dtregistro,
          });
        });
      }

      return result;
    } catch (error) {
      throw error;
    }
  }
}
