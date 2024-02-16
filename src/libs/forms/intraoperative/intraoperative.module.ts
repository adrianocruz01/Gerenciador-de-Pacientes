import { Module } from '@nestjs/common';
import { IntraoperativeController } from './intraoperative.controller';
import { PrismaModule } from 'src/shared/db/libs/prisma/prisma.module';
import { IntraoperativeService } from './service/create-intraoperative.service';
import { SearchIntraOperativeService } from './service/search-intraoperative.service';
import { AuthModule } from 'src/auth/auth.module';
import { UpdateFichaIntraoperatoriaService } from './service/update-intraoperative.service';

@Module({
  imports: [PrismaModule, AuthModule],
  providers: [IntraoperativeService, SearchIntraOperativeService, UpdateFichaIntraoperatoriaService],
  controllers: [IntraoperativeController]
})
export class IntraoperativeModule {}
