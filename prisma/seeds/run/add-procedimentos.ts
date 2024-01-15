import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function addProcedimentos() {
  const procedimentos = [
    { nome: 'ABDOME OU MINI-ABDOME', descricao: 'ABDOME OU MINI-ABDOME', status: '1' },
    { nome: 'ABDOME TÉCNICA SALDANHA', descricao: 'ABDOME TÉCNICA SALDANHA', status: '1' },
    { nome: 'BRAQUIOPLASTIA (SEM PERNOITE NO ICL)', descricao: 'BRAQUIOPLASTIA (SEM PERNOITE NO ICL)', status: '1' },
    { nome: 'BRAQUIOPLASTIA (COM PERNOITE NO ICL)', descricao: 'BRAQUIOPLASTIA (COM PERNOITE NO ICL)', status: '1' },
    {
      nome: 'ELEVAÇÃO DE SOBRANCELHA (SEM PERNOITE NO ICL)',
      descricao: 'ELEVAÇÃO DE SOBRANCELHA (SEM PERNOITE NO ICL)',
      status: '1',
    },
    { nome: 'ENXERTO DE GORDURA NO MALAR (FACE)', descricao: 'ENXERTO DE GORDURA NO MALAR (FACE)', status: '1' },
    { nome: 'EXPLANTE MAMÁRIO', descricao: 'EXPLANTE MAMÁRIO', status: '1' },
    { nome: 'FACE/MINI-LIFTING', descricao: 'FACE/MINI-LIFTING', status: '1' },
    { nome: 'FRONTOPLASTIA', descricao: 'FRONTOPLASTIA', status: '1' },
    { nome: 'FUSO DE PELE', descricao: 'FUSO DE PELE', status: '1' },
    { nome: 'GINECOMASTIA', descricao: 'GINECOMASTIA', status: '1' },
    { nome: 'IMPLANTE CAPILAR', descricao: 'IMPLANTE CAPILAR', status: '1' },
    {
      nome: 'LIPO CERVICAL/ SUBMENTO (SEM PERNOITE NO ICL)',
      descricao: 'LIPO CERVICAL/ SUBMENTO (SEM PERNOITE NO ICL)',
      status: '1',
    },
    { nome: 'LIFTING CERVICAL (SEM PÁLPEBRAS)', descricao: 'LIFTING CERVICAL (SEM PÁLPEBRAS)', status: '1' },
    { nome: 'LIFTING DE COXA (CRUROPLASTIA)', descricao: 'LIFTING DE COXA (CRUROPLASTIA)', status: '1' },
    {
      nome: 'LIPOASPIRAÇÃO DE 1 SEGMENTO (SEM PERNOITE)',
      descricao: 'LIPOASPIRAÇÃO DE 1 SEGMENTO (SEM PERNOITE)',
      status: '1',
    },
    { nome: 'LIPOASPIRAÇÃO DE TÓRAX (SEM PERNOITE)', descricao: 'LIPOASPIRAÇÃO DE TÓRAX (SEM PERNOITE)', status: '1' },
    {
      nome: 'LIPO DE 1 SEGMENTO COM BODYTITE / RENUVION (SEM PERNOITE)',
      descricao: 'LIPO DE 1 SEGMENTO COM BODYTITE / RENUVION (SEM PERNOITE)',
      status: '1',
    },
    {
      nome: 'LIPOASPIRAÇÃO DE 2 OU + SEGMENTOS / LIPOESCULTURA',
      descricao: 'LIPOASPIRAÇÃO DE 2 OU + SEGMENTOS / LIPOESCULTURA',
      status: '1',
    },
    { nome: 'LIPO HD', descricao: 'LIPO HD', status: '1' },
    {
      nome: 'LIPO 2 OU + SEGMENTOS COM RENUVION OU LIPO A LASER',
      descricao: 'LIPO 2 OU + SEGMENTOS COM RENUVION OU LIPO A LASER',
      status: '1',
    },
    { nome: 'MENTOPLASTIA COM AVANÇO ÓSSEO', descricao: 'MENTOPLASTIA COM AVANÇO ÓSSEO', status: '1' },
    {
      nome: 'MAMA COM ANESTESIA PERIDURAL (COM OU SEM PRÓTESE)',
      descricao: 'MAMA COM ANESTESIA PERIDURAL (COM OU SEM PRÓTESE)',
      status: '1',
    },
    {
      nome: 'MAMA COM ANESTESIA GERAL (COM OU SEM PRÓTESE)',
      descricao: 'MAMA COM ANESTESIA GERAL (COM OU SEM PRÓTESE)',
      status: '1',
    },
    { nome: 'MAMA AXILAR (SEM PERNOITE NO ICL)', descricao: 'MAMA AXILAR (SEM PERNOITE NO ICL)', status: '1' },
    { nome: 'MASTECTOMIA BILATERAL', descricao: 'MASTECTOMIA BILATERAL', status: '1' },
    { nome: 'MAMA UNILATERAL (SEM PERNOITE NO ICL)', descricao: 'MAMA UNILATERAL (SEM PERNOITE NO ICL)', status: '1' },
    { nome: 'NÓDULO DE MAMA (SEM PERNOITE NO ICL)', descricao: 'NÓDULO DE MAMA (SEM PERNOITE NO ICL)', status: '1' },
    { nome: 'NINFOPLASTIA (SEM PERNOITE NO ICL)', descricao: 'NINFOPLASTIA (SEM PERNOITE NO ICL)', status: '1' },
    { nome: 'OTOPLASTIA (SEM PERNOITE NO ICL)', descricao: 'OTOPLASTIA (SEM PERNOITE NO ICL)', status: '1' },
    { nome: 'PÁLPEBRAS (SEM PERNOITE NO ICL)', descricao: 'PÁLPEBRAS (SEM PERNOITE NO ICL)', status: '1' },
    {
      nome: 'PÁLPEBRAS SUPERIORES OU INFERIORES (SEM PERNOITE NO ICL)',
      descricao: 'PÁLPEBRAS SUPERIORES OU INFERIORES (SEM PERNOITE NO ICL)',
      status: '1',
    },
    {
      nome: 'PEQ. CIRURGIA COM ANESTESISTA, COM INTERNAÇÃO (APT), SEM PERNOITE',
      descricao: 'PEQ. CIRURGIA COM ANESTESISTA, COM INTERNAÇÃO (APT), SEM PERNOITE',
      status: '1',
    },
    {
      nome: 'PEQ. CIRURGIA COM ANESTESISTA, SEM INTERNAÇÃO (ALTA DO CC)',
      descricao: 'PEQ. CIRURGIA COM ANESTESISTA, SEM INTERNAÇÃO (ALTA DO CC)',
      status: '1',
    },
    { nome: 'PRÓTESE DE GLÚTEO', descricao: 'PRÓTESE DE GLÚTEO', status: '1' },
    {
      nome: 'PRÓTESE DE MENTO (SEM PERNOITE NO ICL)',
      descricao: 'PRÓTESE DE MENTO (SEM PERNOITE NO ICL)',
      status: '1',
    },
    {
      nome: 'PRÓTESE DE MAMA COM ANESTESIA PERIDURAL (SEM PERNOITE NO ICL)',
      descricao: 'PRÓTESE DE MAMA COM ANESTESIA PERIDURAL (SEM PERNOITE NO ICL)',
      status: '1',
    },
    {
      nome: 'PRÓTESE DE MAMA COM ANESTESIA PERIDURAL (COM PERNOITE NO ICL)',
      descricao: 'PRÓTESE DE MAMA COM ANESTESIA PERIDURAL (COM PERNOITE NO ICL)',
      status: '1',
    },
    {
      nome: 'PRÓTESE DE MAMA COM ANESTESIA GERAL (SEM PERNOITE NO ICL)',
      descricao: 'PRÓTESE DE MAMA COM ANESTESIA GERAL (SEM PERNOITE NO ICL)',
      status: '1',
    },
    {
      nome: 'PRÓTESE DE MAMA COM ANESTESIA GERAL (COM PERNOITE NO ICL)',
      descricao: 'PRÓTESE DE MAMA COM ANESTESIA GERAL (COM PERNOITE NO ICL)',
      status: '1',
    },
    { nome: 'PRÓTESE DE PANTURRILHA', descricao: 'PRÓTESE DE PANTURRILHA', status: '1' },
    {
      nome: 'RETIRADA DE PRÓTESE DE MAMA (SEM PERNOITE NO ICL)',
      descricao: 'RETIRADA DE PRÓTESE DE MAMA (SEM PERNOITE NO ICL)',
      status: '1',
    },
    {
      nome: 'RETOQUE COM ANESTESISTA, COM INTERNAÇÃO, SEM PERNOITE NO ICL',
      descricao: 'RETOQUE COM ANESTESISTA, COM INTERNAÇÃO, SEM PERNOITE NO ICL',
      status: '1',
    },
    {
      nome: 'RINOPLASTIA SEM RETIRADA DE COSTELA (SEM PERNOITE NO ICL)',
      descricao: 'RINOPLASTIA SEM RETIRADA DE COSTELA (SEM PERNOITE NO ICL)',
      status: '1',
    },
    {
      nome: 'RINOPLASTIA COM RETIRADA DE COSTELA (SEM PERNOITE NO ICL)',
      descricao: 'RINOPLASTIA COM RETIRADA DE COSTELA (SEM PERNOITE NO ICL)',
      status: '1',
    },
    {
      nome: 'RINOPLASTIA COM RETIRADA DE COSTELA (COM PERNOITE NO ICL)',
      descricao: 'RINOPLASTIA COM RETIRADA DE COSTELA (COM PERNOITE NO ICL)',
      status: '1',
    },
    { nome: 'TORSOPLASTIA', descricao: 'TORSOPLASTIA', status: '1' },
    {
      nome: 'TROCA DE PRÓTESE (SEM PERNOITE NO ICL)',
      descricao: 'TROCA DE PRÓTESE (SEM PERNOITE NO ICL)',
      status: '1',
    },
    {
      nome: 'TROCA DE PRÓTESE (COM PERNOITE NO ICL)',
      descricao: 'TROCA DE PRÓTESE (COM PERNOITE NO ICL)',
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
