import { Injectable } from '@nestjs/common';
import reports from '../data/data';

@Injectable()
export class ReportService {
  getReports(type: string) {
    if (type === 'reports') return reports;
    return reports.filter((report) => report.type === type);
  }

  getReportById(id: number) {
    return reports.find((report) => report.id === id);
  }
}
