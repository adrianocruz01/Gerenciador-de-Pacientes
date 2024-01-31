import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../../shared/db/libs/prisma/prisma.service';

@Injectable()
export class DashboardService {
  constructor(private readonly prisma: PrismaService) {}

  async getResumo() {
    try {
      const totalColaboradores = await this.prisma.colaborador.count();
      const totalPacientes = await this.prisma.paciente.count();
      const totalProcedimentos = await this.prisma.paciente_Procedimento.count();

      // implementar o Promisse.all()

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
