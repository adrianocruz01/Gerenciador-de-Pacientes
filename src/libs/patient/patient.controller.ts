import { Body, Controller, HttpCode, Post, Get, Query, BadRequestException, Param, Put, Delete, NotFoundException, UseGuards } from '@nestjs/common';
import { CreatePatientService } from './services/create-patient.service';
import { SearchPatientService } from './services/search-patient.service';
import { GetPatientByIdService } from './services/get-patient-by-id.service';

import { CreatePatientDto } from './dto/create.patient.dto';
import { SearchPatientDto } from './dto/search.patient.dto';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';
@Controller('pacientes')
@UseGuards(JwtAuthGuard)
export class PatientController {
  registerProcedureById: any;
  constructor(
    private readonly createPatientService: CreatePatientService,
    private readonly searchPatientService: SearchPatientService,
    private readonly getPatientByIdService: GetPatientByIdService,
  ) { }

  // @Get()
  // @HttpCode(200)
  // async findAll(@Query() query: SearchPatientDto): Promise<any> {
  //   return this.searchPatientService.execute(query);
  // }

  @Get('/pesquisar')
  @HttpCode(200)
  async search(@Query() searchPatientDto: SearchPatientDto) {
    const patients = await this.searchPatientService.execute(searchPatientDto);
    if (patients.length === 0) {
      return [];
    }
    return patients;
  }

  @Get(':id')
  @HttpCode(200)
  async searchData(@Param('id') id: string) {
    const patient = await this.getPatientByIdService.execute({ id });
    if (!patient) {
      return 'Nenhum paciente encontrado.';
    }
    return patient;
  }

  @Post('/cadastrar')
  @HttpCode(201)
  async register(@Body() createPatientDtos: CreatePatientDto) {
    const patient = await this.createPatientService.execute(createPatientDtos);
    if (!patient) {
      throw new BadRequestException('Não foi possível criar o paciente com os dados fornecidos.');
    }

    return patient;
  }

}
