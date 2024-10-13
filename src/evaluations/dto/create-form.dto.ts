import { ApiProperty } from '@nestjs/swagger';
import { IsArray, IsNotEmpty, IsString } from 'class-validator';
import { Question } from '../entities/question.entity';
import { QuestionDto } from './question.dto';


export class CreateFormDto {

  @ApiProperty()
  title: string

  @IsString()
  description: string

  @IsArray()
  @IsNotEmpty()
  questions: QuestionDto[];

  @ApiProperty()
  @IsString()
  active: boolean;
}
