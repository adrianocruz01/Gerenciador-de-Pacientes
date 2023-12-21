import { Pessoa } from './entities/person.entity';
import { CreatePessoaDto } from './dto/pessoa.dto';
import { Body, Controller, Get, Post } from '@nestjs/common';
import { ApiBody, ApiResponse } from '@nestjs/swagger';
import { PessoaService } from './person.service';

@Controller('pessoa/')
export class PessoaController {
//   constructor(private pessoaService: PessoaService) {}

//   @Get()
//   @ApiResponse({
//     status: 200,
//     description: 'Pessoas encontradas',
//     type: [Pessoa],
//   })
//   async getAll(): Promise<Pessoa[]> {
//     return await this.pessoaService.getAll();
//   }

//   @Post()
//   @ApiResponse({
//     status: 201,
//     description: 'Pessoa Criada',
//     type: Pessoa,
//   })
//   @ApiBody({
//     type: CreatePessoaDto,
//   })
//   async createOne(@Body() body: CreatePessoaDto): Promise<Pessoa> {
//     return await this.pessoaService.createOne(body);
//   }
}
