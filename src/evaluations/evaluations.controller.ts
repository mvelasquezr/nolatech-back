import {
  Controller,
  Get,
  Post,
  Body,
  Param,  
  Put,
} from '@nestjs/common';
import { EvaluationsService } from './evaluations.service';
import { CreateEvaluationDto } from './dto/create-evaluation.dto';
import {
  UpdateEvaluationDto,
} from './dto/update-evaluation.dto';
import { ApiTags } from '@nestjs/swagger';
import { Auth } from 'src/auth/decorators/auth.decorator';
import { Role } from 'src/common/enums/role.enum';
import { CurrentUserInterface, } from 'src/common/interfaces/curren-user.interface';
import { CurrentUser } from 'src/auth/decorators/current-user.decorator';

@ApiTags('Evaluations')
@Controller('evaluations')
export class EvaluationsController {
  constructor(private readonly evaluationsService: EvaluationsService) {}

  @Post()
  @Auth(Role.EMPLOYEE)
  create(@Body() createEvaluationDto: CreateEvaluationDto) {
    return this.evaluationsService.create(createEvaluationDto);
  }

  @Get(':id')
  @Auth(Role.EMPLOYEE)
  findOne(@Param('id') id: string) {
    return this.evaluationsService.findOne(id);
  }

  @Put(':id')
  @Auth(Role.EMPLOYEE)
  update(
    @Param('id') id: string,
    @Body() updateEvaluationDto: UpdateEvaluationDto,
  ) {
    return this.evaluationsService.update(id, updateEvaluationDto);
  }

  @Get('list-by-user/:form')
  @Auth(Role.EMPLOYEE)
  findAll(@Param('form') form: string, @CurrentUser() user: CurrentUserInterface, ) {
    return this.evaluationsService.findAll(form, user._id);
  }
  
}
