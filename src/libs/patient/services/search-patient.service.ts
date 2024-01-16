import { BadRequestException, Injectable } from '@nestjs/common';
import { PrismaService } from '../../../shared/db/libs/prisma/prisma.service';
import { SearchPatientDto } from '../dto/search.patient.dto';

@Injectable()
export class SearchPatientService {
  constructor(private readonly prisma: PrismaService) {}

  async execute(patientDTO: SearchPatientDto) {
    // Verifica se ambos os campos, nome e cpf, estão vazios
    // if (!patientDTO.nome && !patientDTO.cpf) {
    //   // Se ambos estiverem vazios, lança um erro ou retorna uma mensagem
    //   throw new BadRequestException('É necessário fornecer um nome ou CPF para realizar a busca.');
    // }

    try {
      const patients = await this.prisma.paciente.findMany({
        where: {
          OR: [
            patientDTO.nome ? { nome: { contains: patientDTO.nome } } : undefined,
            patientDTO.cpf ? { cpf: patientDTO.cpf } : undefined,
          ].filter((condition) => condition !== undefined),
        },
        include: {
          Paciente_Procedimento: {
            include: {
              Procedimento: true,
            },
          },
        },
      });

      return patients.map((patient) => {
        return {
          id: patient.paciente_id,
          nome: patient.nome,
          cpf: patient.cpf,
          dtnascimento: patient.dtnascimento,
          sexo: patient.sexo,
          procedimentos: patient.Paciente_Procedimento.map((pProc) => pProc.Procedimento),
        };
      });
    } catch (error) {
      throw new BadRequestException('Erro ao buscar pacientes');
    }
  }
}
