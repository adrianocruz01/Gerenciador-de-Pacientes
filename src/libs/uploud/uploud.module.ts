import { Module } from '@nestjs/common';
import { UploadService } from './uploud.service';
import { UploadController } from './uploud.controller';
import { AuthModule } from '../auth/auth.module';

@Module({
  imports: [AuthModule],
  providers: [UploadService],
  controllers: [UploadController],
})
export class UploudModule {}
