import { Injectable } from '@nestjs/common';
import { ReportService } from '../report';
import { ReportType } from 'src/data/data';

@Injectable()
export class SummaryService {
  constructor(private readonly reportService: ReportService) {}
  getSummary() {
    const totalExpenses = this.reportService
      .getReports(ReportType.EXPENSE)
      .reduce((sum, report) => sum + report.amount, 0);
    const totalIncome = this.reportService
      .getReports(ReportType.INCOME)
      .reduce((sum, report) => sum + report.amount, 0);
    return {
      totalExpenses,
      totalIncome,
      netIncome: totalIncome - totalExpenses,
    };
  }
}
