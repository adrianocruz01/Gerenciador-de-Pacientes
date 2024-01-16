import { Controller, Get, HttpCode, Param, Post, Body } from '@nestjs/common';
import { CreateSAEDto } from './dto/create-sae.dto';
import { CurrentUser } from 'src/libs/auth/guards/current-user-decorator';
import { UserPayload } from 'src/libs/auth/jwt-strategy';
import { CreateSAEFormService } from './service/create-enfermagem-sae.service';
import { GetEnfermagemSaeFormService } from './service/get-enfermagem-sae.service';

@Controller('fichas/sae-triagem')
export class SAETriagemController {
  constructor(
    private readonly createSAEFormService: CreateSAEFormService,
    private readonly getEnfermagemSaeFormService: GetEnfermagemSaeFormService,
  ) { }

    @Get(':paciente_procedimento_id')
    async findAll(@Param('paciente_procedimento_id') paciente_procedimento_id: string) {
      return await this.getEnfermagemSaeFormService.execute(paciente_procedimento_id);
    }

  @Post()
  @HttpCode(201)
  async register(@CurrentUser() colaborador: UserPayload, @Body() createSAEDto: CreateSAEDto) {
    return await this.createSAEFormService.execute(createSAEDto, colaborador.sub);
  }
}
