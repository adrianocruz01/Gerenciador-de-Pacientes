import { Module } from '@nestjs/common';
import { UploadService } from './upload.service';
import { UploadController } from './upload.controller';
import { AuthModule } from '../auth/auth.module';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';

@Module({
  imports: [
    AuthModule,
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..', '..', '..', '..', 'pdfs'),
      serveRoot: '/pdfs',
    }),
  ],
  providers: [UploadService],
  controllers: [UploadController],
})
export class UploadModule {}
