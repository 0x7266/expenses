import { Module } from '@nestjs/common';
import { ReportModule } from './reports/report.module';

@Module({
  imports: [ReportModule],
})
export class AppModule {}
