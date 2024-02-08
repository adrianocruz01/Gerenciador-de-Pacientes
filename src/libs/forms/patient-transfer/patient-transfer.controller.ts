import { Body, Controller, Get, HttpCode, Param, Post, Put, UseGuards } from '@nestjs/common';
import { CurrentUser } from 'src/libs/auth/guards/current-user-decorator';
import { UserPayload } from 'src/libs/auth/jwt-strategy';
import { CreateTransferenciaPacienteDto } from './dto/create-patient-transfer.dt';
import { PatientTransferService } from './service/create-patient-transfer.service';
import { SearchPatientTransferService } from './service/search-patient-transfer.service';
import { JwtAuthGuard } from 'src/libs/auth/guards/jwt-auth.guard';
import { CreateFichaTransferenciaPacienteDto } from './dto/update-patien-prasfer.dto';
import { UpdateFichaPatientTransferService } from './service/upadte-patient-transfer.service';

@Controller('fichas/transferencia-paciente')
@UseGuards(JwtAuthGuard)
export class PatientTrasnferController {
    constructor(
        private readonly patientTransferService: PatientTransferService,
        private readonly searchPatientTransferService: SearchPatientTransferService,
        private readonly updateFichaPatientTransferService: UpdateFichaPatientTransferService,
    ) { }

    @Get(':paciente_procedimento_id')
    @HttpCode(201)
    async findAll(@Param('paciente_procedimento_id') paciente_procedimento_id: string) {
      return await this.searchPatientTransferService.execute(paciente_procedimento_id);
    }

    @Post()
    @HttpCode(201)
    async register(@CurrentUser() colaborador: UserPayload, @Body() createTransferenciaPacienteDto: CreateTransferenciaPacienteDto) {
        return await this.patientTransferService.execute(createTransferenciaPacienteDto, colaborador.sub);
    }

    @Put(':id')
    @HttpCode(204)
    async update(@Param('id') id: number, @Body() updateData: CreateFichaTransferenciaPacienteDto) {
        return await this.updateFichaPatientTransferService.updateFichaTransferPatient(id, updateData)
    }
}
