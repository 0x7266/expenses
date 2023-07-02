import { v4 } from 'uuid';

export enum ReportType {
  INCOME = 'income',
  EXPENSE = 'expense',
}

type Report = {
  id: string;
  type: ReportType;
  amount: number;
  source: string;
  created_at: Date;
  updated_at: Date;
};

export const reports: Report[] = [
  {
    id: v4(),
    type: ReportType.INCOME,
    source: 'Salary',
    amount: 3800,
    created_at: new Date(),
    updated_at: new Date(),
  },
  {
    id: v4(),
    type: ReportType.INCOME,
    source: 'YouTube',
    amount: 770,
    created_at: new Date(),
    updated_at: new Date(),
  },
  {
    id: v4(),
    type: ReportType.EXPENSE,
    source: 'Food',
    amount: 690,
    created_at: new Date(),
    updated_at: new Date(),
  },
  {
    id: v4(),
    type: ReportType.EXPENSE,
    source: 'Internet',
    amount: 50,
    created_at: new Date(),
    updated_at: new Date(),
  },
  {
    id: v4(),
    type: ReportType.INCOME,
    source: 'TikTok',
    amount: 900,
    created_at: new Date(),
    updated_at: new Date(),
  },
  {
    id: v4(),
    type: ReportType.EXPENSE,
    source: 'Medicines',
    amount: 169,
    created_at: new Date(),
    updated_at: new Date(),
  },
  {
    id: v4(),
    type: ReportType.INCOME,
    source: 'Freelancing',
    amount: 550,
    created_at: new Date(),
    updated_at: new Date(),
  },
  {
    id: v4(),
    type: ReportType.EXPENSE,
    source: 'Vet',
    amount: 200,
    created_at: new Date(),
    updated_at: new Date(),
  },
];
