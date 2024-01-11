import { Module } from '@nestjs/common';
import { PatientProcedureController } from './patient-procedure.controller';
import { PatientProcedureService } from './services/patient-procedure.service';
import { PrismaModule } from '../../shared/db/libs/prisma/prisma.module';

@Module({
  imports: [PrismaModule],
  controllers: [PatientProcedureController],
  providers: [PatientProcedureService],
})
export class PatientProcedureModule {}
