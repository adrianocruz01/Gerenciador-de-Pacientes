import { PartialType } from '@nestjs/mapped-types';
import { CreatePatientDto } from '../../../libs/patient/dto/create.patient.dto';

export class UpdatePatientDto extends PartialType(CreatePatientDto) {}

