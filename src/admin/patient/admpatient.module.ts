import { Module } from '@nestjs/common';
import { AdmPatientController } from './admpatient.controller';
import { AdmSearchPatientService } from './service/admsearch-patient.service';
import { PrismaModule } from '../../shared/db/libs/prisma/prisma.module';
import { AdmGetPatientByIdService } from './service/admget-patient-by-id.service';
import { AdmUpdatePatientService } from './service/admupdate-patient.service';
import { AuthModule } from 'src/auth/auth.module';

@Module({
  imports: [PrismaModule, AuthModule],
  providers: [
    AdmSearchPatientService,
    AdmGetPatientByIdService,
    AdmUpdatePatientService
  ],
  controllers: [AdmPatientController],
})
export class AdmPatientModule {}
