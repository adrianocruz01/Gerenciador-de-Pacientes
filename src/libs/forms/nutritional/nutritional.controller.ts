import { Body, Controller, HttpCode, Post, Get, Query, Patch, Param, Delete } from '@nestjs/common';
import { NutritionalService } from './services/nutritional.service';
import { CreateNutritionalDto } from './dto/create-nutritional.dto';
import { UpdateNutritionalDto } from './dto/update-patient-procedure.dto';

@Controller('patient/:patientId/procedures/:prodedureId/nutritional')
export class NutritionalController {
  constructor(private readonly procedureService: NutritionalService) {}

  @Post('')
  @HttpCode(201)
  async register(
    @Param('patientId') patientId: string,
    @Param('prodedureId') procedureId: string,
    @Body() createProcedureDto: CreateNutritionalDto,
  ) {
    return await this.procedureService.create(patientId, procedureId, createProcedureDto);
  }

  @HttpCode(200)
  @Patch(':id')
  async update(
    @Param('patientId') patientId: string,
    @Param('id') id: string,
    @Body() updatePatientProcdeure: UpdateNutritionalDto,
  ) {
    return await this.procedureService.update(patientId, id, updatePatientProcdeure);
  }
}
