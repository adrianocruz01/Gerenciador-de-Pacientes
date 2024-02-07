import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from 'src/shared/db/libs/prisma/prisma.service';
import { UpdateSAEDto } from '../dto/update-sae.dto';

@Injectable()
export class UpdateSAEFormService {
  constructor(private readonly prisma: PrismaService) {}

  async updateEnfermagemSaeForm(
    paciente_procedimento_id: number,
    updateData: UpdateSAEDto,
  ) {
    // Verifica se o paciente_procedimento existe
    const pacienteProcedimentoExists = await this.prisma.paciente_Procedimento.findUnique({
      where: { paciente_Procedimento_id: paciente_procedimento_id },
    });

    if (!pacienteProcedimentoExists) {
      throw new NotFoundException('Relação Paciente_Procedimento não encontrada!');
    }

    const fichaSAE = await this.prisma.ficha_SAE_Triagem.findFirst({
      where: {
        paciente_ProcedimentoPaciente_Procedimento_id: +paciente_procedimento_id,
      },
    });

    if (!fichaSAE) {
      throw new NotFoundException('Ficha SAE não encontrada!');
    }

    await this.prisma.ficha_SAE_Triagem.update({
      where: { fch_SAE_Triagem_id: fichaSAE.fch_SAE_Triagem_id },
      data: {
        colaborador_id: updateData.colaborador_id,
        procedimento_id: updateData.procedimento_id,
        paciente_ProcedimentoPaciente_Procedimento_id: updateData.paciente_Procedimento_id,
        fch_SAE_Triagem_status: updateData.status,
        dt_internacao: updateData.dt_internacao,
        apartamento: updateData.apartamento,
        numero_registro: updateData.numero_registro,
        idade: updateData.idade,
        medico: updateData.medico,
        procedimento: updateData.procedimento,
        sinais_vitais_fc: updateData.sinais_vitais_fc,
        sinais_vitais_pa: updateData.sinais_vitais_pa,
        sinais_vitais_saturacao: updateData.sinais_vitais_saturacao,
        percepcao_sensorial: updateData.percepcao_sensorial,
        umidade: updateData.umidade,
        atividade: updateData.atividade,
        mobilidade: updateData.mobilidade,
        nutricao: updateData.nutricao,
        friccao_cisalhamento: updateData.friccao_cisalhamento,
        total_escala_branden: updateData.total_escala_branden,
        historico_quedas: updateData.historico_quedas,
        diagnostico_secundario: updateData.diagnostico_secundario,
        auxilio_deambulacao: updateData.auxilio_deambulacao,
        terapia_endovenosa_salinizado_heparinizado: updateData.terapia_endovenosa_salinizado_heparinizado,
        marcha: updateData.marcha,
        estado_mental: updateData.estado_mental,
        pontuacao_total_escala_morse: updateData.pontuacao_total_escala_morse,
      },
    });

    return ;
  }
}
