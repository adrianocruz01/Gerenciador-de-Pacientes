import { Body, Controller, Get, HttpCode, Param, Post, Put, UseGuards } from '@nestjs/common';
import { CurrentUser } from 'src/auth/guards/current-user-decorator';
import { UserPayload } from 'src/auth/jwt-strategy';
import { CreateSurvicalReferralService } from './service/create-survical-referral.service';
import { CreateSurvicalReferralDto } from './dto/create-survical.dto';
import { SearchSurvicalReferralService } from './service/serach-survical-referral.service';
import { CollaboratorAuthGuard } from 'src/auth/guards/collaborator-auth.guard';
import { UpdateFichaSurgical } from './service/update-survical-ferral.service';
import { FichaEncaminhamentoPacienteCirurgiaDto } from './dto/update-survical.dto';

@Controller('fichas/encaminhamento-cirurgia')
@UseGuards(CollaboratorAuthGuard)
export class SurvicalReferralController {
    constructor(
        private readonly createSurvicalReferralService: CreateSurvicalReferralService,
        private readonly searchSurvicalReferralService: SearchSurvicalReferralService,
        private readonly updateFichaSurgical: UpdateFichaSurgical,
    ) { }

    @Get(':paciente_procedimento_id')
    @HttpCode(201)
    async findAll(@Param('paciente_procedimento_id') paciente_procedimento_id: string) {
        return await this.searchSurvicalReferralService.execute(paciente_procedimento_id);
    }

    @Post()
    @HttpCode(201)
    async register(@CurrentUser() colaborador: UserPayload, @Body() createSurvicalReferralDto: CreateSurvicalReferralDto) {
        return await this.createSurvicalReferralService.execute(createSurvicalReferralDto, colaborador.sub);
    }

    @Put(':id')
    @HttpCode(204)
    async update(@Param('id') id: number, @Body() updateData: FichaEncaminhamentoPacienteCirurgiaDto) {
        return await this.updateFichaSurgical.updateFichaSurgical(id, updateData)
    }
}
