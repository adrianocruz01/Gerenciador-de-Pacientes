import { BadRequestException, Body, Controller, Get, HttpCode, Param, Post, Query } from '@nestjs/common';
import { CreateCollabService } from './service/create-collab.service';
import { CreateColaboradorDto } from './dto/create-collab.dto';
import { SearchByCPFCollabService } from './service/search-by-cpf-collab.service';
import { SearchCollabDto } from './dto/search-collab.dto';
import { CollabService } from './service/search-collab.service';
import { CollabResponseDto } from './dto/collab-response.dto';

@Controller('colaborador')
export class CollabController {

    constructor(
        private readonly createCollabService: CreateCollabService,
        private readonly searchByCPFCollabService: SearchByCPFCollabService,
        private readonly collabService: CollabService,
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

}
