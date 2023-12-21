import { Module } from '@nestjs/common';
import { PessoaController } from './person.controller';
import { PessoaService } from './person.service';

@Module({
  imports: [],
  providers: [PessoaService],
  controllers: [PessoaController],
})
export class PessoaModule {}
