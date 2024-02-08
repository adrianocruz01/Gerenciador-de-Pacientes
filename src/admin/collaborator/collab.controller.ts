import {
  BadRequestException,
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  NotFoundException,
  Param,
  Post,
  Put,
  Query,
  UseGuards,
} from '@nestjs/common';

import { CreateCollabService } from './service/create-collab.service';
import { SearchByCPFCollabService } from './service/search-by-cpf-collab.service';
import { CollabService } from './service/search-collab.service';
import { UpdateCollabService } from './service/update.collab.service';

import { CreateColaboradorDto } from './dto/create-collab.dto';
import { SearchCollabDto } from './dto/search-collab.dto';
import { UpdateColaboradorDto } from './dto/update.collab.dto';
import { AdminAuthGuard } from '../auth/guards/jwt-auth.guard';

@Controller('colaborador')
@UseGuards(AdminAuthGuard)
export class CollabController {
  constructor(
    private readonly createCollabService: CreateCollabService,
    private readonly searchByCPFCollabService: SearchByCPFCollabService,
    private readonly collabService: CollabService,
    private readonly updateCollabService: UpdateCollabService,
  ) {}

  @Post()
  @HttpCode(201)
  async register(@Body() createColaboradorDto: CreateColaboradorDto) {
    const collab = await this.createCollabService.execute(createColaboradorDto);

    if (!collab) {
      throw new BadRequestException('Não foi possível criar o colaborador com os dados fornecidos.');
    }

    return collab;
  }

  @Get('/pesquisar')
  @HttpCode(200)
  async getAllCollabs(@Query() searchCollabDto: SearchCollabDto) {
    const collabs = await this.collabService.getAllCollabs(searchCollabDto);
    if (collabs.length === 0) {
      return [];
    }
    return collabs;
  }

  @Get('/pesquisarCpf')
  @HttpCode(200)
  async searchByCpf(@Query() searchCollabDto: SearchCollabDto) {
    const collab = await this.searchByCPFCollabService.execute(searchCollabDto);
    return collab;
  }

  @Put(':id')
  @HttpCode(204)
  async updateCollaborador(@Param('id') id: string, @Body() updateColaboradorDto: UpdateColaboradorDto) {
    const idNumber = parseInt(id, 10);

    if (isNaN(idNumber)) {
      throw new BadRequestException('ID inválido. Deve ser um número inteiro.');
    }

    await this.updateCollabService.update(idNumber, updateColaboradorDto);

    return;
  }
}
