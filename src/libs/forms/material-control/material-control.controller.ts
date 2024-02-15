import { Body, Controller, Get, HttpCode, Param, Post, Put, UseGuards } from '@nestjs/common';
import { CurrentUser } from 'src/auth/guards/current-user-decorator';
import { UserPayload } from 'src/auth/jwt-strategy';
import { CreateControleMaterialDto } from './dto/create-material-control.dto';
import { FichaControleMaterialService } from './service/create-material-control.service';
import { SearchMaterialControlService } from './service/search-material-control.service';
import { CollaboratorAuthGuard } from 'src/auth/guards/collaborator-auth.guard';
import { UpdateFichaControleMaterialDto } from './dto/update-materoal-control.dto';
import { UpdateMaterialControlService } from './service/update-material-control.service';

@Controller('fichas/controle-material')
@UseGuards(CollaboratorAuthGuard)
export class MaterialControleController {
    constructor(
        private readonly fichaControleMaterialService: FichaControleMaterialService,
        private readonly searchMaterialControlService: SearchMaterialControlService,
        private readonly updateMaterialControlService: UpdateMaterialControlService,
    ) { }

    @Get(':paciente_procedimento_id')
    async findAll(@Param('paciente_procedimento_id') paciente_procedimento_id: string) {
      return await this.searchMaterialControlService.execute(paciente_procedimento_id);
    }

    @Post()
    @HttpCode(201)
    async register(@CurrentUser() colaborador: UserPayload, @Body() createControleMaterialDto: CreateControleMaterialDto) {
        return await this.fichaControleMaterialService.execute(createControleMaterialDto, colaborador.sub);
    }

    @Put(':id')
    @HttpCode(204)
    async updateFichaMaterialControl(@Param('id') id: number, @Body() updateData: UpdateFichaControleMaterialDto) {
        return  await this.updateMaterialControlService.updateFichasMaterialControl(id, updateData)
    }
}
