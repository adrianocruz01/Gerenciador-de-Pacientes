import { Body, Controller, Get, HttpCode, Param, Post } from '@nestjs/common';
import { CurrentUser } from 'src/libs/auth/guards/current-user-decorator';
import { UserPayload } from 'src/libs/auth/jwt-strategy';
import { CreateControleMaterialDto } from './dto/create-material-control.dto';
import { FichaControleMaterialService } from './service/create-material-control.service';
import { SearchMaterialControlService } from './service/search-material-control.service';

@Controller('fichas/controle-material')
export class MaterialControleController {
    constructor(
        private readonly fichaControleMaterialService: FichaControleMaterialService,
        private readonly searchMaterialControlService: SearchMaterialControlService,
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
}
