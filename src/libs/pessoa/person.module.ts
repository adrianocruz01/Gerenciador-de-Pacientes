import { Module } from '@nestjs/common';
import { PessoaController } from './person.controller';
import { PessoaService } from './person.service';
import { PrismaModule } from '../../shared/db/libs/prisma/prisma.module';

@Module({
  imports: [PrismaModule],
  providers: [PessoaService],
  controllers: [PessoaController],
})
export class PessoaModule {}
