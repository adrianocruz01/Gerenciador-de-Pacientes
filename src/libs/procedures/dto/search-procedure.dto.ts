import { PartialType } from '@nestjs/swagger';
import { ProcedureDto } from './procedure.dto';

export class SearchProcedureDto extends PartialType(ProcedureDto) {}
