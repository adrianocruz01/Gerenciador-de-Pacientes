import {
  Body,
  Controller,
  HttpCode,
  Post,
  Get,
  Query,
  BadRequestException,
  UseGuards,
  Param,
} from '@nestjs/common';
import { ParseIntPipe } from '@nestjs/common';
import { CreatePatientService } from './services/create-patient.service';
import { CreatePatientDto } from './dto/create.patient.dto';
import { SearchPatientService } from './services/search-patient.service';
import { SearchPatientDto } from './dto/search.patient.dto';
import { GetPatientByIdService } from './services/get-patient-by-id.service';
import { ProcedimentoService } from './services/register-procedure-by-id.service';
import { RegisterprocedureDto } from './dto/registerprocedure.patient.dto';

@Controller('pacientes')
export class PatientController {
  registerProcedureById: any;
  constructor(
    private readonly createPatientService: CreatePatientService,
    private readonly searchPatientService: SearchPatientService,
    private readonly getPatientByIdService: GetPatientByIdService,
    private readonly procedimentoService: ProcedimentoService
  ) { }

  @Post('/cadastrar')
  @HttpCode(201)
  async register(@Body() createPatientDtos: CreatePatientDto) {
    const patient = await this.createPatientService.execute(createPatientDtos);
    if (!patient) {
      throw new BadRequestException(
        'Não foi possível criar o paciente com os dados fornecidos.',
      );
    }

    return patient;
  }

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
      return "Nenhum paciente encontrado."
    }
    return patient
  }

  @Post('/:pacienteId/procedimentos')
  @HttpCode(201)
  async registrarProcedimento(
    @Param('pacienteId', ParseIntPipe) pacienteId: number,
    @Body() registerProcedureDto: RegisterprocedureDto
  ) {
    try {
      const procedimento = await this.procedimentoService.execute(pacienteId, registerProcedureDto);
      return procedimento;
    } catch (error) {
      throw new BadRequestException('Erro ao registrar procedimento: ' + error.message);
    }
  }

}
