import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { ReportType, reports } from '../data/data';

@Injectable()
export class ReportService {
  createReport(type: ReportType, { amount, source }: Report) {
    const newReport = {
      id: reports.length + 1,
      type,
      amount,
      source,
      created_at: new Date(),
      updated_at: new Date(),
    };
    reports.push(newReport);
  }

  getReports(type: ReportType) {
    return reports.filter((report) => report.type === type);
  }

  getReportById(type: ReportType, id: number) {
    const report = reports.find(
      (report) => report.id === id && report.type === type,
    );
    if (!report) {
      throw new HttpException('Not found', HttpStatus.NOT_FOUND);
    }
    return report;
  }
}

interface Report {
  source: string;
  amount: number;
}
