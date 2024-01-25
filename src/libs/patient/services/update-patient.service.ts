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

    return await this.prisma.paciente.update({
      where: { paciente_id: id },
      data: updatePatientDto,
    });
  }
}