import { Exclude, Expose } from 'class-transformer';
import { ReportType } from '../../../data/data';

export class ReportResponseDto {
  id: string;
  source: string;
  amount: number;
  @Expose({ name: 'createdAt' })
  transformCreatedAt() {
    return this.created_at;
  }
  @Exclude()
  created_at: Date;
  @Exclude()
  updated_at: Date;
  type: ReportType;

  constructor(partial: Partial<ReportResponseDto>) {
    Object.assign(this, partial);
  }
}
