import { Body, Controller, HttpCode, Post, Get, Query } from '@nestjs/common';
import { CreatePatientService } from './services/create-patient.service';
import { CreatePatientDto } from './dto/create.patient.dto';
import { SearchPatientService } from './services/search-patient.service';
import { SearchPatientDto } from './dto/search.patient.dto';

@Controller('pacientes')
export class PatientController {
  constructor(
    private readonly createPatientService: CreatePatientService,
    private readonly searchPatientService: SearchPatientService
  ) {}

  @Post('/cadastrar')
  @HttpCode(201)
  async register(@Body() createPatientDtos: CreatePatientDto) {
    await this.createPatientService.execute(createPatientDtos);
  }

  @Get('/pesquisar') // Nome do endpoint em inglês e simplificado
  @HttpCode(200)
  async search(@Query() searchPatientDto: SearchPatientDto) { // Usando @Query() para métodos GET
    const patients = await this.searchPatientService.execute(searchPatientDto);
    if (patients.length === 0) {
      // Você pode querer lidar com isso de outra forma, talvez retornando um status 404
      return 'Nenhum paciente encontrado.';
    }
    return patients;
  }

}
