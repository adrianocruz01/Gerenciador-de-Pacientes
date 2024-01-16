import { GetNutritionalFormService } from './services/get-nutritional-form.service';
import { Body, Controller, Get, HttpCode, Param, Post } from '@nestjs/common';
import { CreateNutritionalFormService } from './services/create-nutritional-form.service';
import { CreateNutritionalDto } from './dto/create-nutritional.dto';
import { CurrentUser } from 'src/libs/auth/guards/current-user-decorator';
import { UserPayload } from 'src/libs/auth/jwt-strategy';

@Controller('fichas/nutricional')
export class NutritionalController {
  constructor(
    private readonly CreateNutritionalFormService: CreateNutritionalFormService,
    private readonly getNutritionalFormService: GetNutritionalFormService,
  ) {}

  @Get(':paciente_procedimento_id')
  async findAll(@Param('paciente_procedimento_id') paciente_procedimento_id: string) {
    return await this.getNutritionalFormService.execute(paciente_procedimento_id);
  }

  @Post()
  @HttpCode(201)
  async register(@CurrentUser() colaborador: UserPayload, @Body() createProcedureDto: CreateNutritionalDto) {
    return await this.CreateNutritionalFormService.execute(createProcedureDto, colaborador.sub);
  }
}
