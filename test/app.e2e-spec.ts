import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import * as request from 'supertest';
import { AppModule } from './../src/app.module';
import { reports } from '../src/data/data';

describe('AppController (e2e)', () => {
  let app: INestApplication;
  const reportService = { getReports: () => reports };

  beforeAll(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  it('/api/v1/reports (GET)', () => {
    return request(app.getHttpServer())
      .get('/reports')
      .expect(200)
      .expect(reportService.getReports());
  });

  it('/api/v1/outcome/:id (GET)', () => {
    return request(app.getHttpServer())
      .get('/income/1')
      .expect(200)
      .expect(
        reports.find((report) => report.type === 'income' && report.id === 1),
      );
  });

  it('/api/v1/income/:id (GET)', () => {
    return request(app.getHttpServer())
      .get('/outcome/3')
      .expect(200)
      .expect(
        reports.find((report) => report.type === 'outcome' && report.id === 3),
      );
  });
});
