import {
  HttpException,
  HttpStatus,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { ReportType, reports } from '../../data/data';
import { v4 } from 'uuid';
import { ReportResponseDto } from './dtos/report-response.dto';

@Injectable()
export class ReportService {
  createReport(
    type: ReportType,
    { amount, source }: CreateReport,
  ): ReportResponseDto {
    const newReport = {
      id: v4(),
      type,
      amount,
      source,
      created_at: new Date(),
      updated_at: new Date(),
    };
    reports.push(newReport);
    return new ReportResponseDto(newReport);
  }

  getReports(type: ReportType): ReportResponseDto[] {
    return reports
      .filter((report) => report.type === type)
      .map((report) => new ReportResponseDto(report));
  }

  getReportById(type: ReportType, id: string): ReportResponseDto {
    const report = reports.find(
      (report) => report.id === id && report.type === type,
    );
    if (!report) {
      throw new NotFoundException();
    }
    return new ReportResponseDto(report);
  }

  updateReport(
    type: ReportType,
    body: UpdateReport,
    id: string,
  ): ReportResponseDto {
    const reportToUpdate = reports
      .filter((report) => report.type === type)
      .find((report) => report.id === id);
    if (!reportToUpdate) {
      throw new NotFoundException();
    }
    const reportIndex = reports.findIndex(
      (report) => report.id === reportToUpdate.id,
    );
    reports[reportIndex] = {
      ...reports[reportIndex],
      ...body,
      updated_at: new Date(),
    };
    return new ReportResponseDto(reports[reportIndex]);
  }

  deleteReport(id: string) {
    const reportIndex = reports.findIndex((report) => report.id === id);
    // findIndex returns -1 when the report is not found
    if (reportIndex === -1) {
      throw new NotFoundException();
    }
    reports.splice(reportIndex, 1);
    return 'Done';
  }
}

interface CreateReport {
  source: string;
  amount: number;
}

interface UpdateReport {
  amount?: number;
  source?: string;
}
