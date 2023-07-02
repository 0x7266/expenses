export enum ReportType {
  INCOME = 'income',
  OUTCOME = 'outcome',
}

type Report = {
  id: number;
  type: ReportType;
  amount: number;
  source: string;
  created_at: Date;
  updated_at: Date;
};

const reports: Report[] = [
  {
    id: 1,
    type: ReportType.INCOME,
    source: 'Salary',
    amount: 3800,
    created_at: new Date(),
    updated_at: new Date(),
  },
  {
    id: 2,
    type: ReportType.INCOME,
    source: 'YouTube',
    amount: 600,
    created_at: new Date(),
    updated_at: new Date(),
  },
  {
    id: 3,
    type: ReportType.OUTCOME,
    source: 'Food',
    amount: 690,
    created_at: new Date(),
    updated_at: new Date(),
  },
  {
    id: 4,
    type: ReportType.OUTCOME,
    source: 'Internet',
    amount: 50,
    created_at: new Date(),
    updated_at: new Date(),
  },
  {
    id: 5,
    type: ReportType.INCOME,
    source: 'TikTok',
    amount: 300,
    created_at: new Date(),
    updated_at: new Date(),
  },
  {
    id: 6,
    type: ReportType.OUTCOME,
    source: 'Medicines',
    amount: 169,
    created_at: new Date(),
    updated_at: new Date(),
  },
  {
    id: 7,
    type: ReportType.INCOME,
    source: 'Freelancing',
    amount: 550,
    created_at: new Date(),
    updated_at: new Date(),
  },
  {
    id: 8,
    type: ReportType.OUTCOME,
    source: 'Vet',
    amount: 900,
    created_at: new Date(),
    updated_at: new Date(),
  },
];

export default reports;
