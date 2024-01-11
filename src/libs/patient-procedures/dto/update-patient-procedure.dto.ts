import { PartialType } from '@nestjs/swagger';
import { CreatePatientProcedureDto } from './create-patient-procedure.dto';

export class UpdatePatientProcedureDto extends PartialType(CreatePatientProcedureDto) {}
