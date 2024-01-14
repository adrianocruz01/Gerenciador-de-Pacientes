import { Body, Controller, HttpCode, Post, Get, Query, Param, Delete, ParseIntPipe } from '@nestjs/common';
import { PatientProcedureService } from './services/patient-procedure.service';
import { CreatePatientProcedureDto } from './dto/create-patient-procedure.dto';

@Controller('pacientes/:patientId/procedimentos')
export class PatientProcedureController {
  constructor(private readonly procedureService: PatientProcedureService) {}

  @Post()
  @HttpCode(201)
  register(@Param('patientId', ParseIntPipe) patientId: number, @Body() createProcedureDto: CreatePatientProcedureDto) {
    return this.procedureService.create(patientId, createProcedureDto);
  }

  @HttpCode(200)
  @Delete(':id')
  async remove(@Param('patientId') patientId: number, @Param('id') id: string) {
    return await this.procedureService.remove(patientId, id);
  }

  @Get(':procedureId')
  @HttpCode(200)
  async search(@Param('patientId') patientId: number, @Param('procedureId') procedureId: number) {
    return this.procedureService.findAllForms(patientId, procedureId);
  }
}
