import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../../shared/db/libs/prisma/prisma.service';

@Injectable()
export class DashboardService {
  constructor(private readonly prisma: PrismaService) { }

  async getResumo() {
    try {
      const [totalColaboradores, totalPacientes, totalProcedimentos] = await Promise.all([
        this.prisma.colaborador.count(),
        this.prisma.paciente.count(),
        this.prisma.paciente_Procedimento.count(),
      ]);
      
      return {
        total_colaboradores: totalColaboradores,
        total_pacientes: totalPacientes,
        total_procedimentos: totalProcedimentos,
      };
    } catch (error) {
      throw error;
    }
  }
}
