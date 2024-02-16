import { Body, Controller, Get, HttpCode, Param, Post, Put, UseGuards } from '@nestjs/common';
import { CurrentUser } from 'src/libs/auth/guards/current-user-decorator';
import { UserPayload } from 'src/libs/auth/jwt-strategy';
import { ReceptionService } from './service/create-receipt-surgical.service';
import { CreateReceptionDto } from './dto/create-reception.dto';
import { GetReceptionFormService } from './service/get-reception.service';
import { CollaboratorAuthGuard } from 'src/auth/guards/collaborator-auth.guard';
import { FichaRecebimentoPacienteCirurgiaDto } from './dto/update-reception.dto';
import { UpdateFichaReceipt } from './service/update-surgical.service';

@Controller('fichas/recepcao-cirurgia')
@UseGuards(CollaboratorAuthGuard)
export class ReceptionController {
    constructor(
        private readonly receptionService: ReceptionService,
        private readonly getReceptionFormService: GetReceptionFormService,
        private readonly updateFichaReceipt: UpdateFichaReceipt,
    ) { }

    @Get(':paciente_procedimento_id')
    @HttpCode(201)
    async findAll(@Param('paciente_procedimento_id') paciente_procedimento_id: string) {
        return await this.getReceptionFormService.execute(paciente_procedimento_id);
    }

    @Post()
    @HttpCode(201)
    async register(@CurrentUser() colaborador: UserPayload, @Body() createReceptionDto: CreateReceptionDto) {
        return await this.receptionService.execute(createReceptionDto, colaborador.sub);
    }

    @Put(':id')
    @HttpCode(204)
    async update(@Param('id') id: number, @Body() updateData: FichaRecebimentoPacienteCirurgiaDto) {
        return await this.updateFichaReceipt.updateFichaReceipt(id, updateData)
    }
}
