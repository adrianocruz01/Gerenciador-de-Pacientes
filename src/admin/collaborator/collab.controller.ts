import { BadRequestException, Body, Controller, Delete, Get, HttpCode, NotFoundException, Param, Post, Put } from '@nestjs/common';

import { CreateCollabService } from './service/create-collab.service';
import { SearchByCPFCollabService } from './service/search-by-cpf-collab.service';
import { CollabService } from './service/search-collab.service';
import { UpdateCollabService } from './service/update.collab.service';

import { CreateColaboradorDto } from './dto/create-collab.dto';
import { SearchCollabDto } from './dto/search-collab.dto';
import { UpdateColaboradorDto } from './dto/update.collab.dto';
import { UpdateStatusCollabService } from './service/inative-collab.service';


@Controller('colaborador')
export class CollabController {

    constructor(
        private readonly createCollabService: CreateCollabService,
        private readonly searchByCPFCollabService: SearchByCPFCollabService,
        private readonly collabService: CollabService,
        private readonly updateCollabService: UpdateCollabService,
        private readonly updateStatusCollabService: UpdateStatusCollabService,
    ) { }

    @Post()
    @HttpCode(201)
    async register(@Body() createColaboradorDto: CreateColaboradorDto) {
        const collab = await this.createCollabService.execute(createColaboradorDto);

        if (!collab) {
            throw new BadRequestException('Não foi possível criar o colaborador com os dados fornecidos.');
        }

        return collab;
    }

    @Get()
    async getAllCollabs() {
        const collabs = await this.collabService.getAllCollabs();
        return collabs;
    }

    @Get('/pesquisarCpf')
    @HttpCode(200)
    async searchByCpf(@Body() searchCollabDto: SearchCollabDto) {
        const collab = await this.searchByCPFCollabService.execute(searchCollabDto);
        return collab;
    }

    @Put(':id')
    async updateCollaborador(@Param('id') id: string, @Body() updateColaboradorDto: UpdateColaboradorDto) {
        const idNumber = parseInt(id, 10);

        if (isNaN(idNumber)) {
            throw new BadRequestException('ID inválido. Deve ser um número inteiro.');
        }

        const updatedColaborador = await this.updateCollabService.update(idNumber, updateColaboradorDto);

        if (!updatedColaborador) {
            throw new NotFoundException(`Colaborador com ID ${idNumber} não encontrado.`);
        }

        return updatedColaborador;
    }

    @Put(':id/inativar')
    async inativarColaborador(
        @Param('id') id: number,
        @Body() updateColaboradorDto: UpdateColaboradorDto,
    ) {
        const updatedColaborador = await this.updateStatusCollabService.update(
            id,
            updateColaboradorDto,
        );
        return updatedColaborador;
    }
}
