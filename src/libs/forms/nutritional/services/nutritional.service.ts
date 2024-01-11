import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { CreateNutritionalDto } from '../dto/create-nutritional.dto';
import { UpdateNutritionalDto } from '../dto/update-patient-procedure.dto';
import { PrismaService } from 'src/shared/db/libs/prisma/prisma.service';

@Injectable()
export class NutritionalService {
  constructor(private readonly prisma: PrismaService) {}

  async create(patientId: string, procedureId: string, nutritionalDTO: CreateNutritionalDto) {
    const form = await this.prisma.ficha_Avaliacao_Nutricional.findFirst({
      where: { paciente_id: +patientId, procedimento_id: +procedureId },
    });

    if (form) throw new BadRequestException('Essa ficha já foi preenchida neste procedimento');

    return await this.prisma.ficha_Avaliacao_Nutricional.create({
      data: {
        ...nutritionalDTO,
        paciente_id: +patientId,
        procedimento_id: +procedureId,
      },
    });
  }

  async update(patientId: string, procedureId: string, nutritionalDTO: UpdateNutritionalDto) {
    const form = await this.prisma.ficha_Avaliacao_Nutricional.findFirst({
      where: { paciente_id: +patientId, procedimento_id: +procedureId },
    });

    if (!form) throw new NotFoundException('Ficha não preenchida');

    return await this.prisma.ficha_Avaliacao_Nutricional.update({
      where: {
        fch_avaliacao_nutricional_id: form.fch_avaliacao_nutricional_id,
      },
      data: nutritionalDTO,
    });
  }
}
