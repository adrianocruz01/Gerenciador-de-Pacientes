import { Body, Controller, Get, HttpCode, Param, Post, Put, UseGuards } from '@nestjs/common';
import { CurrentUser } from 'src/auth/guards/current-user-decorator';
import { UserPayload } from 'src/auth/jwt-strategy';
import { NursingDiagnosisService } from './service/create-nursing-diagnosis.service';
import { CreateNursingDiagnosisDto } from './dto/create-nursing-diagnosis.dto';
import { SearchNursingDiagnosisService } from './service/search-nursing-diagnosis.service';
import { CollaboratorAuthGuard } from 'src/auth/guards/collaborator-auth.guard';
import { UpdateFichaDiagnosticoEnfermagemDto } from './dto/update-nursing-diagnosis.dto';
import { UpdateFichaNursingDiagnosisService } from './service/update-nursing-diagnosis.service';
import { AdminCollaboratorAuthGuard } from 'src/auth/guards/admin-collaborator-auth.guard';

@Controller('fichas/diagnostico-enfermagem')
@UseGuards(AdminCollaboratorAuthGuard)
export class NursingDiagnosisController {
  constructor(
    private readonly nursingDiagnosisService: NursingDiagnosisService,
    private readonly searchNursingDiagnosisService: SearchNursingDiagnosisService,
    private readonly updateFichaNursingDiagnosisService: UpdateFichaNursingDiagnosisService,
  ) {}

  @Get(':paciente_procedimento_id')
  @HttpCode(201)
  async findAll(@Param('paciente_procedimento_id') paciente_procedimento_id: string) {
    return await this.searchNursingDiagnosisService.execute(paciente_procedimento_id);
  }

  @Post()
  @HttpCode(201)
  async register(
    @CurrentUser() colaborador: UserPayload,
    @Body() createNursingDiagnosisDto: CreateNursingDiagnosisDto,
  ) {
    return await this.nursingDiagnosisService.execute(createNursingDiagnosisDto, colaborador.sub);
  }

  @Put(':id')
  @HttpCode(204)
  async update(@Param('id') id: number, @Body() updateData: UpdateFichaDiagnosticoEnfermagemDto) {
    return await this.updateFichaNursingDiagnosisService.updateFichaNusingDiagnosis(id, updateData);
  }
}
