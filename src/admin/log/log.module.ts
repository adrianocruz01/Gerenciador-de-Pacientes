import { Module } from '@nestjs/common';
import { PrismaModule } from 'src/shared/db/libs/prisma/prisma.module';
import { AuthModule } from 'src/auth/auth.module';
import { LogController } from './log.controller';
import { FindAllLogsService } from './services/find-all-logs.service';

@Module({
  imports: [PrismaModule, AuthModule],
  providers: [FindAllLogsService],
  controllers: [LogController],
})
export class LogModule {}
