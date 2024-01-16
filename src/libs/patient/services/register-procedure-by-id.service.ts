import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../../shared/db/libs/prisma/prisma.service';
import { Paciente_Procedimento, Procedimento } from '@prisma/client';
import { RegisterprocedureDto } from '../dto/registerprocedure.patient.dto';

@Injectable()
export class ProcedimentoService {
  constructor(private prisma: PrismaService) {}

  async execute(
    pacienteId: number,
    dadosProcedimento: RegisterprocedureDto,
  ): Promise<{
    procedimentoPaciente: Paciente_Procedimento;
    procedimentoDetalhes: Procedimento;
  }> {
    const dtregistro = new Date(dadosProcedimento.dataRegistro);
    const hrregistro = new Date(dadosProcedimento.dataHora);

    const procedimentoPaciente = await this.prisma.paciente_Procedimento.create({
      data: {
        paciente_id: pacienteId,
        procedimento_id: dadosProcedimento.procedimentoId,
        dtregistro: dtregistro,
        hrregistro: hrregistro,
        preenchido: false
      },
    });

    const procedimentoDetalhes = await this.prisma.procedimento.findUnique({
      where: { procedimento_id: dadosProcedimento.procedimentoId },
    });

    return { procedimentoPaciente, procedimentoDetalhes };
  }
}
