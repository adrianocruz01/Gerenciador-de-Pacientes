// Responsável pela configuração do multer, definindo onde e como os arquivos serão armazenados.
import { HttpException } from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { diskStorage } from 'multer';
import * as path from 'path';
import { z } from 'zod';
import * as fs from 'fs';

// Zod enum can be:
// - nutricional
// - sae
// - admissao
// - encaminhamento-cirurgico
// - recebimento
// - intraoperatorio
// - controle-material
// - transferencia
// - encaminhamento-apartamento
// - diagnostico-enfermagem

const UploadSchema = z.object({
  folder: z.enum([
    'nutricional',
    'sae',
    'admissao',
    'encaminhamento-cirurgico',
    'recebimento',
    'intraoperatorio',
    'controle-material',
    'transferencia',
    'encaminhamento-apartamento',
    'diagnostico-enfermagem',
  ]),
});

export const UploadInterceptor = FileInterceptor('pdf', {
  storage: diskStorage({
    destination: (req, _, callback) => {
      try {
        console.log(req.query);

        const parsed = UploadSchema.parse(req.query);

        const uploadPath = path.join(__dirname, '..', '..', '..', '..', 'pdfs', parsed.folder);

        if (!fs.existsSync(uploadPath)) {
          fs.mkdirSync(uploadPath, { recursive: true });
        }

        callback(null, uploadPath);
      } catch (error) {
        if (error instanceof z.ZodError) {
          callback(new HttpException(error.errors, 400), '');
        }
      }
    },
    filename: (_, file, callback) => {
      const filename = path.parse(file.originalname).name;
      const extension = path.parse(file.originalname).ext;
      callback(null, `${filename}${extension}`);
    },
  }),
});
