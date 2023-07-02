import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  ParseEnumPipe,
  ParseUUIDPipe,
  Post,
  Put,
} from '@nestjs/common';
import { ReportService } from './report.service';
import { ReportType } from 'src/data/data';
import { CreateReportDto, ReportResponseDto, UpdateReportDto } from './dtos/';

@Controller(':type')
export class ReportController {
  constructor(private readonly reportService: ReportService) {}

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
  ): ReportResponseDto {
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
  ): ReportResponseDto[] {
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
    @Param('id', ParseUUIDPipe) id: string,
  ): ReportResponseDto {
    const reportType =
      type === 'income' ? ReportType.INCOME : ReportType.EXPENSE;
    return this.reportService.getReportById(reportType, id);
  }

  @Put(':id')
  updateReport(
    @Body() body: UpdateReportDto,
    @Param('type') type: string,
    @Param('id', ParseUUIDPipe) id: string,
  ): ReportResponseDto {
    const reportType =
      type === 'income' ? ReportType.INCOME : ReportType.EXPENSE;
    return this.reportService.updateReport(reportType, body, id);
  }

  @HttpCode(HttpStatus.NO_CONTENT)
  @Delete(':id')
  deleteReport(@Param('id', ParseUUIDPipe) id: string) {
    return this.reportService.deleteReport(id);
  }
}
