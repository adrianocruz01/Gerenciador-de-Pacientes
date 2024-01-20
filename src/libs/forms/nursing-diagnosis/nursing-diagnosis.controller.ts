import { Body, Controller, Get, HttpCode, Param, Post } from '@nestjs/common';
import { CurrentUser } from 'src/libs/auth/guards/current-user-decorator';
import { UserPayload } from 'src/libs/auth/jwt-strategy';
import { NursingDiagnosisService } from './service/create-nursing-diagnosis.service';
import { CreateNursingDiagnosisDto } from './dto/create-nursing-diagnosis.dto';
import { SearchNursingDiagnosisService } from './service/search-nursing-diagnosis.service';

@Controller('fichas/diagnostico-enfermagem')
export class NursingDiagnosisController {
    constructor(
        private readonly nursingDiagnosisService: NursingDiagnosisService,
        private readonly searchNursingDiagnosisService: SearchNursingDiagnosisService,
    ) { }

    @Get(':paciente_procedimento_id')
    async findAll(@Param('paciente_procedimento_id') paciente_procedimento_id: string) {
      return await this.searchNursingDiagnosisService.execute(paciente_procedimento_id);
    }

    @Post()
    @HttpCode(201)
    async register(@CurrentUser() colaborador: UserPayload, @Body() createNursingDiagnosisDto: CreateNursingDiagnosisDto) {
        return await this.nursingDiagnosisService.execute(createNursingDiagnosisDto, colaborador.sub);
    }
}
