import { Body, Controller, HttpCode, Post, Get, Query, Param, Delete, ParseIntPipe, UseGuards } from '@nestjs/common';
import { PatientProcedureService } from './services/patient-procedure.service';
import { CreatePatientProcedureDto } from './dto/create-patient-procedure.dto';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';

@Controller()
@UseGuards(JwtAuthGuard)
export class PatientProcedureController {
  constructor(private readonly procedureService: PatientProcedureService) {}

  @Post('pacientes/:patientId/procedimentos')
  @HttpCode(201)
  register(@Param('patientId', ParseIntPipe) patientId: number, @Body() createProcedureDto: CreatePatientProcedureDto) {
    return this.procedureService.create(patientId, createProcedureDto);
  }

  @Delete('pacientes/:patientId/procedimentos/:id')
  @HttpCode(200)
  async remove(@Param('patientId') patientId: number, @Param('id') id: string) {
    return await this.procedureService.remove(patientId, id);
  }

  @Get('paciente-procedimento/:id')
  @HttpCode(200)
  async search(@Param('id') id: string) {
    return this.procedureService.findAllForms(id);
  }
}
