import { BadRequestException, Body, Controller, Get, HttpCode, Param, Post, Query } from '@nestjs/common';
import { CreateCollabService } from './service/create-collab.service';
import { CreateColaboradorDto } from './dto/create-collab.dto';
import { SearchByCPFCollabService } from './service/search-by-cpf-collab.service';
import { SearchCollabDto } from './dto/search-collab.dto';

@Controller('colaborador')
export class CollabController {

    constructor(
        private readonly createCollabService: CreateCollabService,
        private readonly searchByCPFCollabService: SearchByCPFCollabService,
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
    @HttpCode(200)
    async search(@Body() searchCollabDto: SearchCollabDto) {
        const collab = await this.searchByCPFCollabService.execute(searchCollabDto);
        return collab;
    }
}
