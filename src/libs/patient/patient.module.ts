import { Module } from '@nestjs/common';
import { PatientController } from './patient.controller';
import { SearchPatientService } from './services/search-patient.service';
import { CreatePatientService } from './services/create-patient.service';
import { PrismaModule } from '../../shared/db/libs/prisma/prisma.module';
import { AuthModule } from '../auth/auth.module';
import { GetPatientByIdService } from './services/get-patient-by-id.service';

@Module({
  imports: [PrismaModule, AuthModule],
  controllers: [PatientController],
  providers: [SearchPatientService, CreatePatientService, GetPatientByIdService],
})
export class PatientModule {}
