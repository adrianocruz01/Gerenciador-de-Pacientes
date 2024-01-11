import { PartialType } from '@nestjs/swagger';
import { ProcedureDto } from './procedure.dto';

export class UpdateProcedureDto extends PartialType(ProcedureDto) {}
