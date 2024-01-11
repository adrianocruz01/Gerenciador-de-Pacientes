import { Body, Controller, HttpCode, Post, Get, Query, Patch, Param, Delete } from '@nestjs/common';
import { PatientProcedureService } from './services/patient-procedure.service';
import { CreatePatientProcedureDto } from './dto/create-patient-procedure.dto';
import { UpdatePatientProcedureDto } from './dto/update-patient-procedure.dto';
import { SearchPatientProcedureDto } from './dto/search-patient-procedure.dto';

@Controller('patient/:patientId/procedures')
export class PatientProcedureController {
  constructor(private readonly procedureService: PatientProcedureService) {}

  @Post('')
  @HttpCode(201)
  async register(@Param('patientId') patientId: number, @Body() createProcedureDto: CreatePatientProcedureDto) {
    return await this.procedureService.create(patientId, createProcedureDto);
  }

  @HttpCode(200)
  @Patch(':id')
  async update(
    @Param('patientId') patientId: number,
    @Param('id') id: number,
    @Body() updatePatientProcdeure: UpdatePatientProcedureDto,
  ) {
    return await this.procedureService.update(patientId, id, updatePatientProcdeure);
  }

  @HttpCode(200)
  @Delete(':id')
  async remove(@Param('patientId') patientId: number, @Param('id') id: string) {
    return await this.procedureService.remove(patientId, id);
  }

  @Get('')
  @HttpCode(200)
  async search(@Param('patientId') patientId: number, @Query() searchPatientProcedure: SearchPatientProcedureDto) {
    return this.procedureService.findAll(patientId, searchPatientProcedure);
  }
}
