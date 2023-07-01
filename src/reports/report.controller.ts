import { Controller, Get } from '@nestjs/common';

@Controller()
export class ReportController {
  @Get()
  getReports() {
    return [
      { id: 1, type: 'income', amount: 500 },
      { id: 2, type: 'income', amount: 600 },
      { id: 3, type: 'outcome', amount: 690 },
      { id: 4, type: 'outcome', amount: 450 },
      { id: 5, type: 'income', amount: 300 },
      { id: 6, type: 'outcome', amount: 730 },
      { id: 7, type: 'income', amount: 550 },
      { id: 8, type: 'outcome', amount: 900 },
    ];
  }
}
