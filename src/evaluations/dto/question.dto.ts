import { ApiProperty } from '@nestjs/swagger';
import { IsArray, IsEnum, IsNotEmpty, IsOptional, IsString } from 'class-validator';
import { Question } from '../entities/question.entity';
import { QuestionType } from '../enums/question-type.enum';


export class QuestionDto {

  @IsString()
  question: string;

  @IsString()
  description: string;

  @IsEnum(QuestionType)
  type: QuestionType;

  @IsArray()
  @IsOptional()
  options?: string[];
}
