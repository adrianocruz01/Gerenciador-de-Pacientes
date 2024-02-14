import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from 'src/shared/db/libs/prisma/prisma.service';
import { UpdateFichaAvaliacaoNutricionalDto } from '../dto/update-nutricional.dto';

@Injectable()
export class UpdateFichaNutricionalService {
  constructor(private readonly prisma: PrismaService) { }

  async updateFichaNutricional(paciente_procedimento_id: number, updateData: UpdateFichaAvaliacaoNutricionalDto) {
    const pacienteProcedimentoExists = await this.prisma.paciente_Procedimento.findUnique({
      where: { paciente_Procedimento_id: Number(paciente_procedimento_id) },
    });

    if (!pacienteProcedimentoExists) {
      throw new NotFoundException('Relação Paciente_Procedimento não encontrada!');
    }

    const fichanutricional = await this.prisma.ficha_Avaliacao_Nutricional.findFirst({
      where: {
        paciente_ProcedimentoPaciente_Procedimento_id: +paciente_procedimento_id,
      },
    });

    if (!fichanutricional) {
      throw new NotFoundException('Ficha Nutricional não encontrada!');
    }

    return await this.prisma.ficha_Avaliacao_Nutricional.update({
      where: { fch_avaliacao_nutricional_id: fichanutricional.fch_avaliacao_nutricional_id },
      data: {
        diabetes: updateData.diabetes,
        medicamento_diabetes: updateData.medicamento_diabetes,
        medicamento_diabetes_qual: updateData.medicamento_diabetes_qual,
        horario_isulina: updateData.horario_isulina,
        hipertensao: updateData.hipertensao,
        medicamento_hipertensao: updateData.medicamento_hipertensao,
        medicamento_hipertensao_quais: updateData.medicamento_hipertensao_quais,
        dislipidemias: updateData.dislipidemias,
        disturbios_renais: updateData.disturbios_renais,
        distubios_tireoide: updateData.distubios_tireoide,
        disturbios_hepaticos: updateData.disturbios_hepaticos,
        cardiopatias: updateData.cardiopatias,
        doencao_respiratoria: updateData.doencao_respiratoria,
        outras_patologias_quais: updateData.outras_patologias_quais,
        fumante: updateData.fumante,
        fumante_frequencia: updateData.fumante_frequencia,
        mastigacao: updateData.mastigacao,
        medicamento_diaria: updateData.medicamento_diaria,
        medicamento_diaria_qual: updateData.medicamento_diaria_qual,
        azia_gastrite_refluxo: updateData.azia_gastrite_refluxo,
        azia_gastrite_refluxo_qual: updateData.azia_gastrite_refluxo_qual,
        funcionamento_intestinal_regular: updateData.funcionamento_intestinal_regular,
        funcionamento_intestinal_costipado: updateData.funcionamento_intestinal_costipado,
        alergias: updateData.alergias,
        alergias_qual: updateData.alergias_qual,
        aversao_intolerancia_alimentares: updateData.aversao_intolerancia_alimentares,
        aversao_intolerancia_alimentares_qual: updateData.aversao_intolerancia_alimentares_qual,
      },
    });
  }
}
