import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { ReportType, reports } from '../data/data';
import { v4 } from 'uuid';

@Injectable()
export class ReportService {
  createReport(type: ReportType, { amount, source }: CreateReport) {
    const newReport = {
      id: v4(),
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

  getReportById(type: ReportType, id: string) {
    const report = reports.find(
      (report) => report.id === id && report.type === type,
    );
    if (!report) {
      throw new HttpException('Not found', HttpStatus.NOT_FOUND);
      return;
    }
    return report;
  }

  updateReport(type: ReportType, body: UpdateReport, id: string) {
    const reportToUpdate = reports
      .filter((report) => report.type === type)
      .find((report) => report.id === id);
    if (!reportToUpdate) {
      throw new HttpException('Report not found', HttpStatus.NOT_FOUND);
      return;
    }
    const reportIndex = reports.findIndex(
      (report) => report.id === reportToUpdate.id,
    );
    return (reports[reportIndex] = {
      ...reports[reportIndex],
      ...body,
      updated_at: new Date(),
    });
  }

  deleteReport(id: string) {
    const reportIndex = reports.findIndex((report) => report.id === id);
    // findIndex returns -1 when the report is not found
    if (reportIndex === -1) {
      throw new HttpException('Report not found', HttpStatus.NOT_FOUND);
      return;
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
