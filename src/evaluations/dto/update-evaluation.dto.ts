import { PartialType } from '@nestjs/swagger';
import { IsString } from 'class-validator';
import { CreateEvaluationDto } from './create-evaluation.dto';


export class UpdateEvaluationDto extends PartialType(CreateEvaluationDto) {}