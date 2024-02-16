import { Module } from '@nestjs/common';
import { PatientTrasnferController } from './patient-transfer.controller';
import { PatientTransferService } from './service/create-patient-transfer.service';
import { PrismaModule } from 'src/shared/db/libs/prisma/prisma.module';
import { SearchPatientTransferService } from './service/search-patient-transfer.service';
import { AuthModule } from 'src/auth/auth.module';
import { UpdateFichaPatientTransferService } from './service/upadte-patient-transfer.service';

@Module({
    imports: [PrismaModule, AuthModule],
    providers: [PatientTransferService, SearchPatientTransferService, UpdateFichaPatientTransferService],
    controllers: [PatientTrasnferController]
})
export class PatientTransferModule { }
