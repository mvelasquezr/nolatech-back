import { ApiProperty } from '@nestjs/swagger';
import { IsArray, IsNotEmpty, IsString } from 'class-validator';
import { ResponseDto } from './response.dto';

export class CreateEvaluationDto {
  
  @ApiProperty()
  @IsString()
  madeFor: string;

  @ApiProperty()
  @IsString()
  employee: string;

  @ApiProperty()
  @IsArray()
  @IsNotEmpty()
  response: ResponseDto[];
}
