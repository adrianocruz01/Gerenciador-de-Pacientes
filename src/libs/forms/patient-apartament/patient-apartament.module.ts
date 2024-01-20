import { Module } from '@nestjs/common';
import { PatientTrasnferController } from './patient-apartament.controller';
import { PatientApartamentService } from './service/create-patient-apartament.service';
import { PrismaModule } from 'src/shared/db/libs/prisma/prisma.module';
import { SearchPatientApartamentService } from './service/search-patient-apartament.service';

@Module({
    imports: [PrismaModule],
    providers: [PatientApartamentService, SearchPatientApartamentService],
    controllers: [PatientTrasnferController],
})
export class PatientApartamentModule { }
