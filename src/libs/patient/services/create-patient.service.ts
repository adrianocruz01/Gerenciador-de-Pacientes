import { BadRequestException, Injectable } from '@nestjs/common';
import { CreatePatientDto } from '../dto/create.patient.dto';
import { PrismaService } from '../../../shared/db/libs/prisma/prisma.service';
import { UserPayload } from 'src/auth/jwt-strategy';

@Injectable()
export class CreatePatientService {
  constructor(private readonly prisma: PrismaService) {}

  async execute(patientDTO: CreatePatientDto, user: UserPayload) {
    const hasPatient = await this.prisma.paciente.findFirst({
      where: {
        cpf: patientDTO.cpf,
      },
    });

    if (hasPatient) {
      throw new BadRequestException('Já existe um usuário com esse CPF');
    }

    const patient = await this.prisma.paciente.create({
      data: {
        cpf: patientDTO.cpf,
        nome: patientDTO.nome,
        sexo: patientDTO.sexo,
        dtnascimento: patientDTO.dtnascimento,
        dtalteracao: new Date(),
        dtcadastro: new Date(),
      },
    });

    await this.prisma.log.create({
      data: {
        id_responsavel_mudanca: user.sub,
        flag_responsavel: 'C',
        acao: 'Cadastro de paciente',
        atributo: null,
        id_afetado: patient.paciente_id,
        flag_afetado: 'P',
      },
    });

    return {
      id: patient.paciente_id,
      nome: patient.nome,
      cpf: patient.cpf,
      sexo: patient.sexo,
      dtnascimento: patient.dtnascimento,
    };

    // console.log(patient)
    // return patient
  }
}
