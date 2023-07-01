import { Injectable } from '@nestjs/common';
import reports from 'src/data/data';

@Injectable()
export class ReportService {
  getReports(type: string) {
    return reports.filter((report) => report.type === type);
  }

  getReportById(id: number) {
    return reports.find((report) => report.id === id);
  }
}
