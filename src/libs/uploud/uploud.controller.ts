// Lida com a rota HTTP e utiliza o FileInterceptor para processar o upload do arquivo.
import { Controller, Post, UploadedFile, UseInterceptors, HttpException, HttpStatus } from '@nestjs/common';
import { UploadInterceptor } from './upload.interceptor';

@Controller('upload')
export class UploadController {
  @Post()
  @UseInterceptors(UploadInterceptor)
  async uploadFile(@UploadedFile() file: Express.Multer.File) {
    if (!file) {
      throw new HttpException('No file uploaded', HttpStatus.BAD_REQUEST);
    }
    console.log(`${file.fieldname} uploaded to ${file.path}`);

    return { message: 'Upload feito com sucesso', filename: file.filename };
  }
}
