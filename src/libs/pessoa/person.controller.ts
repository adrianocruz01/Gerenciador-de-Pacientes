import { Pessoa } from './entities/person.entity';
import { CreatePessoaDto } from './dto/pessoa.dto';
import { Body, Controller, Get, Post } from '@nestjs/common';
import { ApiBody, ApiResponse } from '@nestjs/swagger';
import { PrismaService } from '../../shared/db/libs/prisma/prisma.service';
import { Colaborador } from '@prisma/client';

@Controller('colaborador/')
export class PessoaController {
  constructor(private prisma: PrismaService) {}

  @Get()
  @ApiResponse({
    status: 200,
    description: 'Pessoas encontradas',
  })
  async getAll(): Promise<Colaborador[]> {
    return await this.prisma.colaborador.findMany();
  }

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
