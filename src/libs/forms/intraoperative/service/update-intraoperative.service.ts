import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from 'src/shared/db/libs/prisma/prisma.service';
import { UpdateFichaIntraoperatoriaDto } from '../dto/update-intraoperative.dto';

@Injectable()
export class UpdateFichaIntraoperatoriaService {
  constructor(private readonly prisma: PrismaService) { }

  async updateFichaIntraoperatoria(
    paciente_procedimento_id: number,
    updateData: UpdateFichaIntraoperatoriaDto,
  ) {

    const pacienteProcedimentoExists = await this.prisma.paciente_Procedimento.findUnique({
      where: { paciente_Procedimento_id: Number(paciente_procedimento_id) },
    });

    if (!pacienteProcedimentoExists) {
      throw new NotFoundException('Relação Paciente_Procedimento não encontrada!');
    }

    const fichaIntraoperatoria = await this.prisma.ficha_Intraoperatoria.findFirst({
      where: {
        paciente_ProcedimentoPaciente_Procedimento_id: +paciente_procedimento_id,
      },
    });

    if (!fichaIntraoperatoria) {
      throw new NotFoundException('Ficha Intraoperatoria não encontrada!');
    }

    return await this.prisma.ficha_Intraoperatoria.update({
      where: { fch_intraoperatoria_id: fichaIntraoperatoria.fch_intraoperatoria_id },
      data: updateData
    });

  }
}
