import { Controller, Get, HttpCode, Param, Post, Body } from '@nestjs/common';
import { CreateSAEDto } from './dto/create-sae.dto';
import { CurrentUser } from 'src/libs/auth/guards/current-user-decorator';
import { UserPayload } from 'src/libs/auth/jwt-strategy';
// import { GetSAETriagemService } from './services/get-sae-triagem.service';
import { CreateSAEFormService } from './service/enfermagem-sae.service';

@Controller('fichas/sae-triagem')
export class SAETriagemController {
  constructor(
    private readonly createSAEFormService: CreateSAEFormService,
    // private readonly getSAETriagemService: GetSAETriagemService,
  ) { }

  //   @Get(':paciente_procedimento_id')
  //   async findAll(@Param('paciente_procedimento_id') paciente_procedimento_id: string) {
  //     return await this.getSAETriagemService.execute(paciente_procedimento_id);
  //   }

  @Post()
  @HttpCode(201)
  async register(@CurrentUser() colaborador: UserPayload, @Body() createSAEDto: CreateSAEDto) {
    return await this.createSAEFormService.execute(createSAEDto, colaborador.sub);
  }
}
