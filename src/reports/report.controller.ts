import {
  Controller,
  Get,
  Param,
  ParseIntPipe,
  ParseEnumPipe,
  HttpStatus,
} from '@nestjs/common';
import { ReportService } from './report.service';
import { ReportType } from 'src/data/data';

@Controller(':type')
export class ReportController {
  constructor(private reportService: ReportService) {}
  @Get()
  getReports(
    @Param(
      'type',
      new ParseEnumPipe(ReportType, {
        errorHttpStatusCode: HttpStatus.BAD_REQUEST,
      }),
    )
    type: string,
  ) {
    const reportType =
      type === 'income' ? ReportType.INCOME : ReportType.OUTCOME;
    return this.reportService.getReports(reportType);
  }

  @Get(':id')
  getReportById(
    @Param(
      'type',
      new ParseEnumPipe(ReportType, {
        errorHttpStatusCode: HttpStatus.BAD_REQUEST,
      }),
    )
    type: string,
    @Param('id', ParseIntPipe) id: number,
  ) {
    const reportType =
      type === 'income' ? ReportType.INCOME : ReportType.OUTCOME;
    return this.reportService.getReportById(reportType, id);
  }
}
