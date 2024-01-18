import { Body, Controller, HttpCode, Post, Get, Param } from '@nestjs/common';
import { CurrentUser } from 'src/libs/auth/guards/current-user-decorator';
import { UserPayload } from 'src/libs/auth/jwt-strategy';
import { IntraoperativeService } from './service/create-intraoperative.service';
import { CreateIntraoperativeDto } from './dto/create-intraoperative.dto';
import { SearchIntraOperativeService } from './service/search-intraoperative.service';

@Controller('fichas/intraoperatoria')
export class IntraoperativeController {
  constructor(
    private readonly intraoperativeService: IntraoperativeService,
    private readonly searchIntraOperativeService: SearchIntraOperativeService
    ) {}

  @Get(':paciente_procedimento_id')
    async findAll(@Param('paciente_procedimento_id') paciente_procedimento_id: string) {
      return await this.searchIntraOperativeService.execute(paciente_procedimento_id);
    }

  @Post()
  @HttpCode(201)
  async create(
    @CurrentUser() colaborador: UserPayload,
    @Body() createIntraoperativeDto: CreateIntraoperativeDto,
  ) {
    return await this.intraoperativeService.create(createIntraoperativeDto, colaborador.sub);
  }
}
