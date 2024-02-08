import { Module } from '@nestjs/common';
import { PatientTrasnferController } from './patient-apartament.controller';
import { PatientApartamentService } from './service/create-patient-apartament.service';
import { PrismaModule } from 'src/shared/db/libs/prisma/prisma.module';
import { SearchPatientApartamentService } from './service/search-patient-apartament.service';
import { AuthModule } from 'src/libs/auth/auth.module';
import { UpdateFichaPatientApartamentService } from './service/update-patient-apartament.service';

@Module({
    imports: [PrismaModule, AuthModule],
    providers: [PatientApartamentService, SearchPatientApartamentService, UpdateFichaPatientApartamentService],
    controllers: [PatientTrasnferController],
})
export class PatientApartamentModule { }
