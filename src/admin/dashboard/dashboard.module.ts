import { Module } from '@nestjs/common';
import { PrismaModule } from 'src/shared/db/libs/prisma/prisma.module';
import { DashboardService } from './service/dashboard.service';
import { DashboardController } from './dashboard.controller';
import { FichasAllDashboardService } from './service/fichas.service';

@Module({
    imports: [PrismaModule],
    providers: [DashboardService, FichasAllDashboardService],
    controllers: [DashboardController]
})
export class DashboardModule {}
