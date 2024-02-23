import { FindAllLogsService } from './services/find-all-logs.service';
import { Controller, Get } from '@nestjs/common';

@Controller('admin/logs')
export class LogController {
  constructor(private readonly findAllLogsService: FindAllLogsService) {}

  @Get()
  getLogs() {
    return this.findAllLogsService.findAll();
  }
}
