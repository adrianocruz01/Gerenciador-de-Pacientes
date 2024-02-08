import { Body, Controller, Get, HttpCode, Param, Post, UseGuards, Put } from '@nestjs/common';
import { CurrentUser } from 'src/libs/auth/guards/current-user-decorator';
import { UserPayload } from 'src/libs/auth/jwt-strategy';
import { PatientApartamentService } from './service/create-patient-apartament.service';
import { CreatePatientApartamentPacienteDto } from './dto/create-patient-apartament.dto';
import { SearchPatientApartamentService } from './service/search-patient-apartament.service';
import { JwtAuthGuard } from 'src/libs/auth/guards/jwt-auth.guard';
import { CreateFichaEncaminhamentoPacienteDto } from './dto/update-patient-apartamento.dto';
import { UpdateFichaPatientApartamentService } from './service/update-patient-apartament.service';

@Controller('fichas/paciente-apartamento')
@UseGuards(JwtAuthGuard)
export class PatientTrasnferController {
    constructor(
        private readonly patientApartamentService: PatientApartamentService,
        private readonly searchPatientApartamentService: SearchPatientApartamentService,
        private readonly updateFichaPatientApartamentService: UpdateFichaPatientApartamentService,
    ) { }

    @Get(':paciente_procedimento_id')
    @HttpCode(201)
    async findAll(@Param('paciente_procedimento_id') paciente_procedimento_id: string) {
        return await this.searchPatientApartamentService.execute(paciente_procedimento_id);
    }

    @Post()
    @HttpCode(201)
    async register(@CurrentUser() colaborador: UserPayload, @Body() createPatientApartamentPacienteDto: CreatePatientApartamentPacienteDto) {
        return await this.patientApartamentService.execute(createPatientApartamentPacienteDto, colaborador.sub);
    }

    @Put(':id')
    @HttpCode(204)
    async update(@Param('id') id: number, @Body() updateData: CreateFichaEncaminhamentoPacienteDto) {
        return await this.updateFichaPatientApartamentService.updateFichaPatientApartament(id, updateData)
    }
}
