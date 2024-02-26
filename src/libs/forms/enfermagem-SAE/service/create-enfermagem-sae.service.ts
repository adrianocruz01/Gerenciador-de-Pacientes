import { BadRequestException, Injectable } from '@nestjs/common';
import { PrismaService } from 'src/shared/db/libs/prisma/prisma.service';
import { CreateSAEDto } from '../dto/create-sae.dto';

@Injectable()
export class CreateSAEFormService {
  constructor(private readonly prisma: PrismaService) {}

  async execute(sae: CreateSAEDto, colaborador_id: number) {
    const { paciente_procedimento_id } = sae;

    const exists = await this.prisma.ficha_SAE_Triagem.findFirst({
      where: { paciente_ProcedimentoPaciente_Procedimento_id: paciente_procedimento_id },
    });

    if (exists) throw new BadRequestException('Essa ficha já foi preenchida neste procedimento');

    const create = await this.prisma.ficha_SAE_Triagem.create({
      data: {
        dt_internacao: sae.dt_internacao,
        apartamento: sae.apartamento,
        numero_registro: sae.numero_registro,
        idade: sae.idade,
        medico: sae.medico,
        procedimento: sae.procedimento,
        sinais_vitais_fc: sae.sinais_vitais_fc,
        sinais_vitais_pa: sae.sinais_vitais_pa,
        sinais_vitais_saturacao: sae.sinais_vitais_saturacao,
        percepcao_sensorial: sae.percepcao_sensorial,
        umidade: sae.umidade,
        atividade: sae.atividade,
        mobilidade: sae.mobilidade,
        nutricao: sae.nutricao,
        friccao_cisalhamento: sae.friccao_cisalhamento,
        total_escala_branden: sae.total_escala_branden,
        historico_quedas: sae.historico_quedas,
        diagnostico_secundario: sae.diagnostico_secundario,
        auxilio_deambulacao: sae.auxilio_deambulacao,
        terapia_endovenosa_salinizado_heparinizado: sae.terapia_endovenosa_salinizado_heparinizado,
        marcha: sae.marcha,
        estado_mental: sae.estado_mental,
        pontuacao_total_escala_morse: sae.pontuacao_total_escala_morse,

        Colaborador: {
          connect: {
            colaborador_id,
          },
        },
        Paciente: {
          connect: {
            paciente_id: sae.paciente_id,
          },
        },
        Procedimento: {
          connect: {
            procedimento_id: sae.procedimento_id,
          },
        },

        Paciente_Procedimento: {
          connect: {
            paciente_Procedimento_id: sae.paciente_procedimento_id,
          },
        },
      },
    });

    await this.prisma.log.create({
      data: {
        id_responsavel_mudanca: colaborador_id,
        flag_responsavel: 'C',
        acao: 'Cadastro de ficha',
        atributo: 'Ficha SAE',
        id_afetado: sae.paciente_id,
        flag_afetado: 'P',
      },
    });

    return create;
  }
}
