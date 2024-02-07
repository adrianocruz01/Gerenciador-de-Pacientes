import { Module } from '@nestjs/common';
import { PatientAdmissionService } from './service/create-admission.service';
import { PatientAdmissionController } from './patient-admission.controller';
import { PrismaModule } from 'src/shared/db/libs/prisma/prisma.module';
import { GetAdmissionFormService } from './service/get-admission.service';
import { AuthModule } from 'src/libs/auth/auth.module';

@Module({
  imports: [PrismaModule, AuthModule],
  controllers: [PatientAdmissionController],
  providers: [PatientAdmissionService, GetAdmissionFormService],
})
export class PatientAdmissionModule {}
