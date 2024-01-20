import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from 'src/shared/db/libs/prisma/prisma.service';

@Injectable()
export class SearchPatientTransferService {
    constructor(private readonly prisma: PrismaService) {}

    async execute(paciente_procedimento_id: string) {
        const paciente_ProcedimentoExists = await this.prisma.ficha_Transferencia_Paciente.findFirst({
            where: { paciente_ProcedimentoPaciente_Procedimento_id: +paciente_procedimento_id}
        });

        if(!paciente_ProcedimentoExists) {
            throw new NotFoundException('Procedimento não encontrado!');
        }

        const form = await this.prisma.ficha_Transferencia_Paciente.findFirst({
            where: {
                paciente_ProcedimentoPaciente_Procedimento_id: +paciente_procedimento_id
            }
        });

        if(!form) {
            throw new NotFoundException('Ficha não encontrada!');
        }

        return form;
    }
}