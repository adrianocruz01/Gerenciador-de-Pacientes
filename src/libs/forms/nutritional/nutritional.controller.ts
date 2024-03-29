import { AdminCollaboratorAuthGuard } from 'src/auth/guards/admin-collaborator-auth.guard';
import { GetNutritionalFormService } from './services/get-nutritional-form.service';
import { Body, Controller, Get, HttpCode, Param, Post, Put, UseGuards } from '@nestjs/common';
import { CreateNutritionalFormService } from './services/create-nutritional-form.service';
import { CreateNutritionalDto } from './dto/create-nutritional.dto';

import { UpdateFichaAvaliacaoNutricionalDto } from './dto/update-nutricional.dto';
import { UpdateFichaNutricionalService } from './services/update-nutricional.service';
import { CurrentUser } from 'src/auth/guards/current-user-decorator';
import { UserPayload } from 'src/auth/jwt-strategy';

@Controller('fichas/nutricional')
@UseGuards(AdminCollaboratorAuthGuard)
export class NutritionalController {
  constructor(
    private readonly CreateNutritionalFormService: CreateNutritionalFormService,
    private readonly getNutritionalFormService: GetNutritionalFormService,
    private readonly updateFichaNutricionalService: UpdateFichaNutricionalService,
  ) {}

  @Get(':paciente_procedimento_id')
  @HttpCode(201)
  async findAll(@Param('paciente_procedimento_id') paciente_procedimento_id: string) {
    return await this.getNutritionalFormService.execute(paciente_procedimento_id);
  }

  @Post()
  @HttpCode(201)
  async register(@CurrentUser() colaborador: UserPayload, @Body() createProcedureDto: CreateNutritionalDto) {
    return await this.CreateNutritionalFormService.execute(createProcedureDto, colaborador.sub);
  }

  @Put(':id')
  @HttpCode(204)
  async update(@Param('id') id: number, @Body() updateData: UpdateFichaAvaliacaoNutricionalDto) {
    return await this.updateFichaNutricionalService.updateFichaNutricional(id, updateData);
  }
}
