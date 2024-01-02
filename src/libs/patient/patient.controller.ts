import { Body, Controller, HttpCode, Post } from '@nestjs/common';
import { CreatePatientService } from './services/create-patient.service';
import { CreatePatientDto } from './dto/create.patient.dto';

@Controller('patient')
export class PatientController {
  constructor(private readonly createPatientService: CreatePatientService ) {}

  @Post('/cadastrar-paciente')
  @HttpCode(201)
  async register(@Body() createPatientDtos: CreatePatientDto) {
    await this.createPatientService.execute(createPatientDtos);
  }
}
