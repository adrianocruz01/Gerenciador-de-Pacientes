import { Body, Controller, Get, HttpCode, Param, Post, Put, UseGuards } from '@nestjs/common';
import { PatientAdmissionService } from './service/create-admission.service';
import { CurrentUser } from 'src/libs/auth/guards/current-user-decorator';
import { UserPayload } from 'src/libs/auth/jwt-strategy';
import { CreateAdmissionDto } from './dto/create-admission.dto';
import { GetAdmissionFormService } from './service/get-admission.service';
import { JwtAuthGuard } from 'src/libs/auth/guards/jwt-auth.guard';
import { FichaAdmissaoPacienteUnidadeDto } from './dto/update-admission.dto';
import { UpdateFichaPatientAdmissionService } from './service/update-patient-admisson.service';

@Controller('fichas/paciente-admissao')
@UseGuards(JwtAuthGuard)
export class PatientAdmissionController {
    constructor(
        private readonly patientAdmissionService: PatientAdmissionService,
        private readonly getAdmissionFormService: GetAdmissionFormService,
        private readonly updateFichaPatientAdmissionService: UpdateFichaPatientAdmissionService,
    ) { }

    @Get(':paciente_procedimento_id')
    @HttpCode(201)
    async findAll(@Param('paciente_procedimento_id') paciente_procedimento_id: string) {
        return await this.getAdmissionFormService.execute(paciente_procedimento_id);
    }

    @Post()
    @HttpCode(201)
    async register(@CurrentUser() colaborador: UserPayload, @Body() createAdmissionDto: CreateAdmissionDto) {
        return await this.patientAdmissionService.execute(createAdmissionDto, colaborador.sub);
    }

    @Put(':id')
    @HttpCode(204)
    async update(@Param('id') id: number, @Body() updateData: FichaAdmissaoPacienteUnidadeDto) {
        return await this.updateFichaPatientAdmissionService.updateFichaPatientAdmission(id, updateData);
    }
}
