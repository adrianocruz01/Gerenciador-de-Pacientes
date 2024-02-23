import {
  BadRequestException,
  Body,
  Controller,
  Get,
  HttpCode,
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
import { AdminAuthGuard } from 'src/auth/guards/admin-auth.guard';
import { AdminCollaboratorAuthGuard } from 'src/auth/guards/admin-collaborator-auth.guard';

@Controller('colaborador')
export class CollabController {
  constructor(
    private readonly createCollabService: CreateCollabService,
    private readonly searchByCPFCollabService: SearchByCPFCollabService,
    private readonly collabService: CollabService,
    private readonly updateCollabService: UpdateCollabService,
  ) {}

  @Post()
  @HttpCode(201)
  @UseGuards(AdminAuthGuard)
  async register(@Body() createColaboradorDto: CreateColaboradorDto) {
    const collab = await this.createCollabService.execute(createColaboradorDto);

    if (!collab) {
      throw new BadRequestException('Não foi possível criar o colaborador com os dados fornecidos.');
    }

    return collab;
  }

  @UseGuards(AdminCollaboratorAuthGuard)
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
  @UseGuards(AdminAuthGuard)
  async searchByCpf(@Query() searchCollabDto: SearchCollabDto) {
    const collab = await this.searchByCPFCollabService.execute(searchCollabDto);
    return collab;
  }

  @Put(':id')
  @HttpCode(204)
  @UseGuards(AdminAuthGuard)
  async updateCollaborador(@Param('id') id: string, @Body() updateColaboradorDto: UpdateColaboradorDto) {
    const idNumber = parseInt(id, 10);

    if (isNaN(idNumber)) {
      throw new BadRequestException('ID inválido. Deve ser um número inteiro.');
    }

    await this.updateCollabService.update(idNumber, updateColaboradorDto);

    return;
  }
}
