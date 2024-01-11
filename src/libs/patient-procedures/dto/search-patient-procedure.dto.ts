import { PartialType } from '@nestjs/swagger';
import { ProcedureDto } from 'src/libs/procedures/dto/procedure.dto';

export class SearchPatientProcedureDto extends PartialType(ProcedureDto) {}
