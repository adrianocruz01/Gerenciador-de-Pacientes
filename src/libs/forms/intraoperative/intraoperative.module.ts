import { Module } from '@nestjs/common';
import { IntraoperativeController } from './intraoperative.controller';
import { PrismaModule } from 'src/shared/db/libs/prisma/prisma.module';
import { IntraoperativeService } from './service/create-intraoperative.service';
import { SearchIntraOperativeService } from './service/search-intraoperative.service';
import { AuthModule } from 'src/libs/auth/auth.module';

@Module({
  imports: [PrismaModule, AuthModule],
  providers: [IntraoperativeService, SearchIntraOperativeService],
  controllers: [IntraoperativeController]
})
export class IntraoperativeModule {}
