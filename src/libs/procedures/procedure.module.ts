import { Module } from '@nestjs/common';
import { ProcedureController } from './procedure.controller';
import { ProcedureService } from './services/procedure.service';
import { PrismaModule } from '../../shared/db/libs/prisma/prisma.module';

@Module({
  imports: [PrismaModule],
  controllers: [ProcedureController],
  providers: [ProcedureService],
})
export class ProcedureModule {}
