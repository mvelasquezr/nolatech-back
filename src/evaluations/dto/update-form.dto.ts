import { PartialType } from '@nestjs/swagger';
import { IsString } from 'class-validator';
import { CreateFormDto } from './create-form.dto';


export class UpdateFormDto extends PartialType(CreateFormDto) {}