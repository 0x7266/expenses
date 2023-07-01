import { Injectable } from '@nestjs/common';
import reports from 'src/data/data';

@Injectable()
export class ReportService {
  getReports() {
    return reports;
  }
}
