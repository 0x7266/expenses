import { Controller, Get, Param, ParseIntPipe } from '@nestjs/common';
import { ReportService } from './report.service';

@Controller(':type')
export class ReportController {
  constructor(private reportService: ReportService) {}
  @Get()
  getReports(@Param('type') type: string) {
    return this.reportService.getReports(type);
  }

  @Get(':id')
  getReportById(@Param('id', ParseIntPipe) id: number) {
    return this.reportService.getReportById(id);
  }
}
