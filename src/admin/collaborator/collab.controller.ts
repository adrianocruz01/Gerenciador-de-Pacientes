import { BadRequestException, Body, Controller, Get, HttpCode, NotFoundException, Param, Post, Put } from '@nestjs/common';

import { CreateCollabService } from './service/create-collab.service';
import { SearchByCPFCollabService } from './service/search-by-cpf-collab.service';
import { CollabService } from './service/search-collab.service'; 
import { UpdateCollabService } from './service/update.collab.service';

import { CreateColaboradorDto } from './dto/create-collab.dto';
import { SearchCollabDto } from './dto/search-collab.dto';
import { CollabResponseDto } from './dto/collab-response.dto';
import { UpdateColaboradorDto } from './dto/update.collab.dto';

@Controller('colaborador')
export class CollabController {

    constructor(
        private readonly createCollabService: CreateCollabService,
        private readonly searchByCPFCollabService: SearchByCPFCollabService,
        private readonly collabService: CollabService,
        private readonly updateCollabService: UpdateCollabService,
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
    async getAllCollabs(): Promise<CollabResponseDto[]> {
        const collabs = await this.collabService.getAllCollabs();

        return collabs.map((collab) => ({
            colaborador_id: collab.colaborador_id,
            nome: collab.nome,
            cpf: collab.cpf,
            especialidade: collab.especialidade,
            matricula: collab.matricula,
            matricula_estado: collab.matricula_estado,
            status: collab.status,
        }));
    }

    @Get('/pesquisarCpf')
    @HttpCode(200)
    async searchByCpf(@Body() searchCollabDto: SearchCollabDto) {
        const collab = await this.searchByCPFCollabService.execute(searchCollabDto);
        return collab;
    }

    // @Put(':id')
    // @HttpCode(200)
    // async update(@Param('id') id: number, @Body() updateColaboradorDto: UpdateColaboradorDto) {
    //     return this.updateCollabService.update(id, updateColaboradorDto);
    // }


    @Put(':id')
    async updateCollaborador(@Param('id') id: string, @Body() updateColaboradorDto: UpdateColaboradorDto) {
        // Converta 'id' para um número inteiro
        const idNumber = parseInt(id, 10);

        // Verifique se 'idNumber' é um número válido antes de chamar o serviço
        if (isNaN(idNumber)) {
            throw new BadRequestException('ID inválido. Deve ser um número inteiro.');
        }

        // Chame o serviço de atualização com 'idNumber'
        const updatedColaborador = await this.updateCollabService.update(idNumber, updateColaboradorDto);

        // Retorne a resposta adequada, dependendo do resultado da atualização
        if (!updatedColaborador) {
            throw new NotFoundException(`Colaborador com ID ${idNumber} não encontrado.`);
        }

        return updatedColaborador;
    }
}
