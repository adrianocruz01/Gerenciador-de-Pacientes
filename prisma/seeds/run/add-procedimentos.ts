import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function addProcedimentos() {
  const procedimentos = [
    {
      nome: 'Fuso de Pele',
      descricao: 'Fuso de Pele',
      status: '1',
    },
    {
      nome: 'Cirurgia',
      descricao: 'Cirurgia',
      status: '1',
    },
  ];

  try {
    await prisma.procedimento.createMany({
      data: procedimentos,
    });
  } catch (error) {
    console.error('Erro ao adicionar procedimentos:', error);
  } finally {
    await prisma.$disconnect();
  }
}

addProcedimentos();
