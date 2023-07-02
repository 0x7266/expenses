import {
  Body,
  Controller,
  Get,
  HttpStatus,
  Param,
  ParseEnumPipe,
  ParseIntPipe,
  Post,
} from '@nestjs/common';
import { ReportService } from './report.service';
import { ReportType } from 'src/data/data';
import { CreateReportDto } from './dtos/create-report.dto';

@Controller(':type')
export class ReportController {
  constructor(private reportService: ReportService) {}

  @Post()
  createReport(
    @Body() { amount, source }: CreateReportDto,
    @Param(
      'type',
      new ParseEnumPipe(ReportType, {
        errorHttpStatusCode: HttpStatus.BAD_REQUEST,
      }),
    )
    type: string,
  ) {
    const reportType =
      type === 'income' ? ReportType.INCOME : ReportType.EXPENSE;
    return this.reportService.createReport(reportType, { amount, source });
  }

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
      type === 'income' ? ReportType.INCOME : ReportType.EXPENSE;
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
      type === 'income' ? ReportType.INCOME : ReportType.EXPENSE;
    return this.reportService.getReportById(reportType, id);
  }
}
