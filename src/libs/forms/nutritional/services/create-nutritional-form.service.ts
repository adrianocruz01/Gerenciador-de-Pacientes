import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { CreateNutritionalDto } from '../dto/create-nutritional.dto';
import { PrismaService } from 'src/shared/db/libs/prisma/prisma.service';

@Injectable()
export class CreateNutritionalFormService {
  constructor(private readonly prisma: PrismaService) {}

  async execute(nutritionalDTO: CreateNutritionalDto, colaborador_id: number) {
    const { paciente_id, procedimento_id, paciente_procedimento_id } = nutritionalDTO;

    const form = await this.prisma.ficha_Avaliacao_Nutricional.findFirst({
      where: { paciente_ProcedimentoPaciente_Procedimento_id: paciente_procedimento_id },
    });

    if (form) throw new BadRequestException('Essa ficha já foi preenchida neste procedimento');

    const create = await this.prisma.ficha_Avaliacao_Nutricional.create({
      data: {
        diabetes: nutritionalDTO.diabetes,
        medicamento_diabetes: nutritionalDTO.medicamento_diabetes,
        medicamento_diabetes_qual: nutritionalDTO.medicamento_diabetes_qual,
        horario_isulina: nutritionalDTO.horario_insulina,
        hipertensao: nutritionalDTO.hipertensao,
        medicamento_hipertensao: nutritionalDTO.medicamento_hipertensao,
        medicamento_hipertensao_quais: nutritionalDTO.medicamento_hipertensao_quais,
        dislipidemias: nutritionalDTO.dislipidemias,
        disturbios_renais: nutritionalDTO.disturbios_renais,
        distubios_tireoide: nutritionalDTO.distubios_tireoide,
        disturbios_hepaticos: nutritionalDTO.disturbios_hepaticos,
        cardiopatias: nutritionalDTO.cardiopatias,
        doencao_respiratoria: nutritionalDTO.doencao_respiratoria,
        outras_patologias_quais: nutritionalDTO.outras_patologias_quais,
        fumante: nutritionalDTO.fumante,
        fumante_frequencia: nutritionalDTO.fumante_frequencia,
        mastigacao: nutritionalDTO.mastigacao,
        medicamento_diaria: nutritionalDTO.medicamento_diaria,
        medicamento_diaria_qual: nutritionalDTO.medicamento_diaria_qual,
        azia_gastrite_refluxo: nutritionalDTO.azia_gastrite_refluxo,
        azia_gastrite_refluxo_qual: nutritionalDTO.azia_gastrite_refluxo_qual,
        funcionamento_intestinal_regular: nutritionalDTO.funcionamento_intestinal_regular,
        funcionamento_intestinal_costipado: nutritionalDTO.funcionamento_intestinal_costipado,
        alergias: nutritionalDTO.alergias,
        alergias_qual: nutritionalDTO.alergias_qual,
        aversao_intolerancia_alimentares: nutritionalDTO.aversao_intolerancia_alimentares,
        aversao_intolerancia_alimentares_qual: nutritionalDTO.aversao_intolerancia_alimentares_qual,
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
        atributo: 'Ficha de avaliação nutricional',
        id_afetado: paciente_id,
        flag_afetado: 'P',
      },
    });

    return create;
  }
}
