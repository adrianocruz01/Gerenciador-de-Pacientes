import { Controller, HttpCode, Get, Query, Param, UseGuards, Put, Body } from '@nestjs/common';

import { SearchPatientDto } from './dto/admsearch.patient.dto';
import { AdmSearchPatientService } from './service/admsearch-patient.service';
import { AdmGetPatientByIdService } from './service/admget-patient-by-id.service';
import { UpdatePatientDto } from '../../admin/patient/dto/update-patient.dto';
import { AdmUpdatePatientService } from './service/admupdate-patient.service';
import { AdminAuthGuard } from 'src/auth/guards/admin-auth.guard';


@Controller('adm/pacientes')
@UseGuards(AdminAuthGuard)
export class AdmPatientController {
  registerProcedureById: any;
  constructor(
    private readonly admSearchPatientService: AdmSearchPatientService,
    private readonly admGetPatientByIdService: AdmGetPatientByIdService,
    private readonly admUpdatePatientService: AdmUpdatePatientService,
  ) { }

  @Get('/pesquisar')
  @HttpCode(200)
  async search(@Query() searchPatientDto: SearchPatientDto) {
    const patients = await this.admSearchPatientService.execute(searchPatientDto);
    if (patients.length === 0) {
      return [];
    }
    return patients;
  }

  @Get(':id')
  @HttpCode(200)
  async searchData(@Param('id') id: string) {
    const patient = await this.admGetPatientByIdService.execute({ id });
    if (!patient) {
      return 'Nenhum paciente encontrado.';
    }
    return patient;
  }

  @Put(':id')
  @HttpCode(200)
  async update(
    @Param('id') id: string,
    @Body() updatePatientDto: UpdatePatientDto,
  ) {
    const updatedPatient = await this.admUpdatePatientService.update(
      parseInt(id, 10),
      updatePatientDto,
    );

    return updatedPatient;
  }

}
