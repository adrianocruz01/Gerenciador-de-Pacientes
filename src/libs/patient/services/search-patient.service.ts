import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../../shared/db/libs/prisma/prisma.service';

@Injectable()
export class SearchPatientService {
  constructor(private readonly prisma: PrismaService) {}


  async execute(
    // Inserir DTO nos parâmetros
  ) {
  // Trás vários pacientes
    // this.prisma.paciente.findMany({
    //   where: {
    //     cpf: '...dto cpf',
    //     nome: '...dto nome'
    //   }
    // })
  }
}
