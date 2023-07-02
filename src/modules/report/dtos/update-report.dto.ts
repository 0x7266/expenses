import {
  IsNumber,
  IsPositive,
  IsString,
  IsOptional,
  IsNotEmpty,
} from 'class-validator';

export class UpdateReportDto {
  @IsOptional()
  @IsNumber()
  @IsPositive()
  amount: number;

  @IsOptional()
  @IsString()
  @IsNotEmpty()
  source: string;
}
