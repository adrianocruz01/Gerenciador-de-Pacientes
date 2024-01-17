import { Body, Controller, Get, HttpCode, Param, Post } from '@nestjs/common';
import { CurrentUser } from 'src/libs/auth/guards/current-user-decorator';
import { UserPayload } from 'src/libs/auth/jwt-strategy';
import { CreateSurvicalReferralService } from './service/create-survical-referral.service';
import { CreateSurvicalReferralDto } from './dto/create-survical.dto';
import { SearchSurvicalReferralService } from './service/serach-survical-referral.service';
// import { GetAdmissionFormService } from './service/get-admission.service';

@Controller('fichas/encaminhamento-cirurgia')
export class SurvicalReferralController {
    constructor(
        private readonly createSurvicalReferralService: CreateSurvicalReferralService,
        private readonly searchSurvicalReferralService: SearchSurvicalReferralService,
    ) { }

    @Get(':paciente_procedimento_id')
    async findAll(@Param('paciente_procedimento_id') paciente_procedimento_id: string) {
      return await this.searchSurvicalReferralService.execute(paciente_procedimento_id);
    }

    @Post()
    @HttpCode(201)
    async register(@CurrentUser() colaborador: UserPayload, @Body() createSurvicalReferralDto: CreateSurvicalReferralDto) {
        return await this.createSurvicalReferralService.execute(createSurvicalReferralDto, colaborador.sub);
    }
}
