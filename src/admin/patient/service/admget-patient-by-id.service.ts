import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../../shared/db/libs/prisma/prisma.service';
import { SearchDataDto } from '../dto/admsearchData.patient.dto';

@Injectable()
export class AdmGetPatientByIdService {
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
              _count: {
                select: {
                  Ficha_Admissao_Paciente_Unidade: true,
                  Ficha_Avaliacao_Nutricional: true,
                  Ficha_Controle_Material: true,
                  Ficha_Diagnostico_Enfermagem: true,
                  Ficha_Encaminhamento_Paciente: true,
                  Ficha_Encaminhamento_Paciente_Cirurgia: true,
                  Ficha_Intraoperatoria: true,
                  Ficha_Recebimento_Paciente_Cirurgia: true,
                  Ficha_SAE_Triagem: true,
                  Ficha_Transferencia_Paciente: true,
                },
              },
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
            qtd_total_fichas:
              proc._count.Ficha_Admissao_Paciente_Unidade +
              proc._count.Ficha_Avaliacao_Nutricional +
              proc._count.Ficha_Controle_Material +
              proc._count.Ficha_Diagnostico_Enfermagem +
              proc._count.Ficha_Encaminhamento_Paciente +
              proc._count.Ficha_Encaminhamento_Paciente_Cirurgia +
              proc._count.Ficha_Intraoperatoria +
              proc._count.Ficha_Recebimento_Paciente_Cirurgia +
              proc._count.Ficha_SAE_Triagem +
              proc._count.Ficha_Transferencia_Paciente,
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
