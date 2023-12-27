// Responsável pela configuração do multer, definindo onde e como os arquivos serão armazenados.
import { FileInterceptor } from '@nestjs/platform-express';
import { diskStorage } from 'multer';
import * as path from 'path';

export const UploadInterceptor = FileInterceptor('pdf', {
  storage: diskStorage({
    destination: path.join(__dirname, "..", "..", "..", "pdfs"),
    filename: (req, file, callback) => {
      const filename = path.parse(file.originalname).name;
      const extension = path.parse(file.originalname).ext;
      callback(null, `${filename}${extension}`);
    },
  }),
});
