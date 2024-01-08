import { PrismaClient } from '@prisma/client';
import * as bcrypt from 'bcrypt';

const prisma = new PrismaClient();

async function addColaborador() {
  const senhaHashed = await bcrypt.hash('123456789', 10);

  const novoColaborador = {
    nome: 'yuri',
    cpf: '046.179.703-80',
    senha: senhaHashed,
  };

  try {
    const colaborador = await prisma.colaborador.create({
      data: novoColaborador,
    });
    console.log('Colaborador adicionado:', colaborador);
  } catch (error) {
    console.error('Erro ao adicionar colaborador:', error);
  } finally {
    await prisma.$disconnect();
  }
}

addColaborador();
