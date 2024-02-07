import { Body, Controller, HttpCode, Post, Get, Query, Patch, Param, Delete, UseGuards } from '@nestjs/common';
import { ProcedureService } from './services/procedure.service';
import { ProcedureDto } from './dto/procedure.dto';
import { UpdateProcedureDto } from './dto/update-procedure.dto';
import { SearchProcedureDto } from './dto/search-procedure.dto';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';

@Controller('procedures')
@UseGuards(JwtAuthGuard)
export class ProcedureController {
  constructor(private readonly procedureService: ProcedureService) {}

  @Post()
  @HttpCode(201)
  async register(@Body() createProcedureDto: ProcedureDto) {
    return await this.procedureService.create(createProcedureDto);
  }

  @Patch(':id')
  @HttpCode(200)
  async update(@Param('id') id: string, @Body() createProcedureDto: UpdateProcedureDto) {
    return await this.procedureService.update(id, createProcedureDto);
  }

  @Delete(':id')
  @HttpCode(200)
  async remove(@Param('id') id: string) {
    return await this.procedureService.remove(id);
  }

  @Get()
  @HttpCode(200)
  async search(@Query() searchProcedureDto: SearchProcedureDto) {
    return this.procedureService.findAll(searchProcedureDto);
  }
}
