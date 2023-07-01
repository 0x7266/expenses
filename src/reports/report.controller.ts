import { Controller, Get } from '@nestjs/common';
import { ReportService } from './report.service';

@Controller()
export class ReportController {
  constructor(private reportService: ReportService) {}
  @Get()
  getReports() {
    return this.reportService.getReports();
  }
}
