import { Module } from '@nestjs/common';
import { NursingDiagnosisController } from './nursing-diagnosis.controller';
import { NursingDiagnosisService } from './service/create-nursing-diagnosis.service';
import { PrismaModule } from 'src/shared/db/libs/prisma/prisma.module';
import { SearchNursingDiagnosisService } from './service/search-nursing-diagnosis.service';
import { AuthModule } from 'src/auth/auth.module';
import { UpdateFichaNursingDiagnosisService } from './service/update-nursing-diagnosis.service';

@Module({
  imports:[PrismaModule, AuthModule],
  providers: [NursingDiagnosisService, SearchNursingDiagnosisService, UpdateFichaNursingDiagnosisService],
  controllers: [NursingDiagnosisController],
})
export class NursingDiagnosisModule {}
