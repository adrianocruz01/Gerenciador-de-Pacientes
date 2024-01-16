import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from 'src/shared/db/libs/prisma/prisma.service';

@Injectable()
export class GetNutritionalFormService {
  constructor(private readonly prisma: PrismaService) {}

  async execute(paciente_procedimento_id) {
    const paciente_procedimento = await this.prisma.paciente_Procedimento.findFirst({
      where: { paciente_Procedimento_id: +paciente_procedimento_id },
    });

    if (!paciente_procedimento) throw new NotFoundException('Procedimento não encontrado');

    const form = await this.prisma.ficha_Avaliacao_Nutricional.findFirst({
      where: { paciente_ProcedimentoPaciente_Procedimento_id: +paciente_procedimento_id },
    });

    if (!form) throw new NotFoundException('Ficha não encontrada');

    return form;
  }
}
