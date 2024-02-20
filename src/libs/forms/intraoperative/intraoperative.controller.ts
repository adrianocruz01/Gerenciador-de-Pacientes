import { Body, Controller, HttpCode, Post, Get, Param, UseGuards, Put } from '@nestjs/common';
import { CurrentUser } from 'src/auth/guards/current-user-decorator';
import { UserPayload } from 'src/auth/jwt-strategy';
import { IntraoperativeService } from './service/create-intraoperative.service';
import { CreateIntraoperativeDto } from './dto/create-intraoperative.dto';
import { SearchIntraOperativeService } from './service/search-intraoperative.service';
import { UpdateFichaIntraoperatoriaDto } from './dto/update-intraoperative.dto';
import { UpdateFichaIntraoperatoriaService } from './service/update-intraoperative.service';
import { AdminCollaboratorAuthGuard } from 'src/auth/guards/admin-collaborator-auth.guard';

@Controller('fichas/intraoperatoria')
@UseGuards(AdminCollaboratorAuthGuard)
export class IntraoperativeController {
  constructor(
    private readonly intraoperativeService: IntraoperativeService,
    private readonly searchIntraOperativeService: SearchIntraOperativeService,
    private readonly updateFichaIntraoperatoriaService: UpdateFichaIntraoperatoriaService,
  ) {}

  @Get(':paciente_procedimento_id')
  @HttpCode(201)
  async findAll(@Param('paciente_procedimento_id') paciente_procedimento_id: string) {
    return await this.searchIntraOperativeService.execute(paciente_procedimento_id);
  }

  @Post()
  @HttpCode(201)
  async create(@CurrentUser() colaborador: UserPayload, @Body() createIntraoperativeDto: CreateIntraoperativeDto) {
    return await this.intraoperativeService.create(createIntraoperativeDto, colaborador.sub);
  }

  @Put(':id')
  @HttpCode(204)
  async update(@Param('id') id: number, @Body() updateData: UpdateFichaIntraoperatoriaDto) {
    return await this.updateFichaIntraoperatoriaService.updateFichaIntraoperatoria(id, updateData);
  }
}
