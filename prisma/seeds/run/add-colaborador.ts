import { PrismaClient } from '@prisma/client';
import * as bcrypt from 'bcrypt';

const prisma = new PrismaClient();

async function addColaborador() {
  const senhaHashed = await bcrypt.hash('123456789', 10);

  const novoColaborador = {
    nome: 'yuri',
    cpf: '053.197.201-14',
    senha: senhaHashed,
    especialidade: 'Administrador',
  };

  try {
    const colaborador = await prisma.colaborador.create({
      data: novoColaborador,
    });
    // console.log('Colaborador adicionado:', colaborador);
  } catch (error) {
    console.error('Erro ao adicionar colaborador:', error);
  } finally {
    await prisma.$disconnect();
  }
}

addColaborador();
