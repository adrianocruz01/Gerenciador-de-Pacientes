import { Controller, Get, HttpCode, Query } from '@nestjs/common';
import { DashboardService } from './service/dashboard.service';
import { FichasAllDashboardService } from './service/fichas.service';
import { FichasAllDto } from './dto/fichas.dto';

@Controller('dashboard')
export class DashboardController {
  constructor(
    private readonly dashboardService: DashboardService,
    private readonly fichasAllDashboardService: FichasAllDashboardService,
  ) {}

  @Get('resumo')
  @HttpCode(200)
  async getResumo() {
    return this.dashboardService.getResumo();
  }

  @Get('fichas')
  @HttpCode(200)
  async getFichas(@Query() fichasAllDto: FichasAllDto) {
    return this.fichasAllDashboardService.getFichas(fichasAllDto);
  }
}
