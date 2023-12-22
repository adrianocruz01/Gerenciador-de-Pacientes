import { Module } from '@nestjs/common';
import { UploadService } from './uploud.service';
import { UploadController } from './uploud.controller';

@Module({
  controllers: [UploadController],
  providers: [UploadService],
})
export class UploudModule {}
