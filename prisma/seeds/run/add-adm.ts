import { UnauthorizedException } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';
import * as bcrypt from 'bcrypt';

const prisma = new PrismaClient();

async function addAdm() {
  const senhaHashed = await bcrypt.hash('123456789', 10);

  const novoAdm = {
    nome: 'admin',
    cpf: '939.509.220-32',
    senha: senhaHashed,
    especialidade: 'Administrador',
  };

  try {
    const adm = await prisma.colaborador.findUnique({ where: { cpf: novoAdm.cpf } });

    if (adm) {
      throw new UnauthorizedException('O Administrador ja existe!');
    }

    await prisma.colaborador.create({
      data: novoAdm,
    });
    // console.log('Administrador adicionado:', administrador);
  } catch (error) {
    console.error('Erro ao adicionar Administrador:', error);
  } finally {
    await prisma.$disconnect();
  }
}

addAdm();
