import { Module } from '@nestjs/common';
import { AdmPatientController } from './admpatient.controller';
import { AdmSearchPatientService } from './service/admsearch-patient.service';
import { PrismaModule } from '../../shared/db/libs/prisma/prisma.module';
import { AdminAuthModule } from '../auth/admin-auth.module';
import { AdmGetPatientByIdService } from './service/admget-patient-by-id.service';
import { AdmUpdatePatientService } from './service/admupdate-patient.service';

@Module({
  imports: [PrismaModule, AdminAuthModule],
  providers: [
    AdmSearchPatientService,
    AdmGetPatientByIdService,
    AdmUpdatePatientService
  ],
  controllers: [AdmPatientController],
})
export class AdmPatientModule {}
