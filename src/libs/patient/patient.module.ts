import { Module } from '@nestjs/common';
import { PatientController } from './patient.controller';
import { SearchPatientService } from './services/search-patient.service';
import { CreatePatientService } from './services/create-patient.service';
import { PrismaModule } from '../../shared/db/libs/prisma/prisma.module';

@Module({
    imports: [PrismaModule],
    controllers: [PatientController],
    providers: [SearchPatientService, CreatePatientService]
})
export class PatientModule {}
