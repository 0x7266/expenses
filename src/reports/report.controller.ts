import { Controller, Get } from '@nestjs/common';
import reports from 'src/data/data';

@Controller()
export class ReportController {
  @Get()
  getReports() {
    return reports;
  }
}
