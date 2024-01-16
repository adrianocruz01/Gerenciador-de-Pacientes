import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../../shared/db/libs/prisma/prisma.service';
import { SearchDataDto } from '../dto/searchData.patient.dto';

@Injectable()
export class GetPatientByIdService {
  constructor(private readonly prisma: PrismaService) {}

  async execute(patientDTO: SearchDataDto) {
    try {
      const patient = await this.prisma.paciente.findUnique({
        where: {
          paciente_id: Number(patientDTO.id),
        },
        include: {
          Paciente_Procedimento: {
            include: {
              Procedimento: true,
            },
          },
        },
      });

      return {
        id: patient.paciente_id,
        nome: patient.nome,
        cpf: patient.cpf,
        dtnascimento: patient.dtnascimento,
        sexo: patient.sexo,
        procedimentos: patient.Paciente_Procedimento.map((proc) => {
          return {
            id: proc.procedimento_id,
            paciente_procedimento_id: proc.paciente_Procedimento_id,
            nome: proc.Procedimento.nome,
            descricao: proc.Procedimento.descricao,
            dtregistro: proc.dtregistro,
            preenchido: proc.preenchido,
          };
        }),
      };
    } catch (error) {}
  }
}
