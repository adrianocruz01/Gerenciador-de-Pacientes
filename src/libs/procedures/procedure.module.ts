import { Module } from '@nestjs/common';
import { ProcedureController } from './procedure.controller';
import { ProcedureService } from './services/procedure.service';
import { PrismaModule } from '../../shared/db/libs/prisma/prisma.module';
import { AuthModule } from '../../auth/auth.module';

@Module({
  imports: [PrismaModule, AuthModule],
  controllers: [ProcedureController],
  providers: [ProcedureService],
})
export class ProcedureModule {}
