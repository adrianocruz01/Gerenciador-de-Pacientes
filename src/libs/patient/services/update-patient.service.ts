import { Injectable, BadRequestException } from '@nestjs/common';
import { PrismaService } from 'src/shared/db/libs/prisma/prisma.service';
import { UpdatePatientDto } from '../dto/update-patient.dto';

@Injectable()
export class UpdatePatientService {
  constructor(private readonly prisma: PrismaService) {}

  async update(id: number, updatePatientDto: UpdatePatientDto) {
    const patient = await this.prisma.paciente.findUnique({
      where: { paciente_id: id },
    });

    if (!patient) {
      throw new BadRequestException(`Paciente com ID ${id} não encontrado!`);
    }

    // Salve o estado atual do paciente antes da atualização
    const pacienteAntes = { ...patient };

    // Atualize o paciente com os novos dados
    const updatedPatient = await this.prisma.paciente.update({
      where: { paciente_id: id },
      data: updatePatientDto,
    });

    // Compare o estado anterior com o estado atual para determinar o que foi alterado
    const changes: Partial<UpdatePatientDto> = {};

    for (const key in updatePatientDto) {
      if (pacienteAntes[key] !== updatedPatient[key]) {
        changes[key] = updatedPatient[key];
      }
    }

    return changes;
  }
}
