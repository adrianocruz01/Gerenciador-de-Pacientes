import { BadRequestException, Body, Controller, HttpCode, Post } from '@nestjs/common';
import { CreateCollabService } from './service/collab.service';
import { CreateColaboradorDto } from './dto/create-collab.dto';

@Controller('colaborador')
export class Collabontroller {

    constructor(private readonly createCollabService: CreateCollabService) { }

    @Post()
    @HttpCode(201)
    async register(@Body() createColaboradorDto: CreateColaboradorDto) {
        const collab = await this.createCollabService.execute(createColaboradorDto);

        if (!collab) {
            throw new BadRequestException('Não foi possível criar o paciente com os dados fornecidos.');
        }

        return collab;
    }

}
