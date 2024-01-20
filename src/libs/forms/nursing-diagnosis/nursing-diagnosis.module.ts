import { Module } from '@nestjs/common';
import { NursingDiagnosisController } from './nursing-diagnosis.controller';
import { NursingDiagnosisService } from './service/create-nursing-diagnosis.service';
import { PrismaModule } from 'src/shared/db/libs/prisma/prisma.module';
import { SearchNursingDiagnosisService } from './service/search-nursing-diagnosis.service';

@Module({
  imports:[PrismaModule],
  providers: [NursingDiagnosisService, SearchNursingDiagnosisService],
  controllers: [NursingDiagnosisController],
})
export class NursingDiagnosisModule {}
