import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  Put,
} from '@nestjs/common';

import { ApiTags } from '@nestjs/swagger';
import { Auth } from 'src/auth/decorators/auth.decorator';
import { Role } from 'src/common/enums/role.enum';
import { CreateFormDto } from './dto/create-form.dto';
import { UpdateFormDto } from './dto/update-form.dto';
import { FormService } from './form.service';

@ApiTags('Form')
@Controller('form')
export class FormController {
  constructor(private readonly formService: FormService) {}

  @Post()
  @Auth(Role.ADMIN)
  create(@Body() input: CreateFormDto) {
    return this.formService.create(input);
  }

  @Get()
  @Auth(Role.ADMIN)
  findAll() {
    return this.formService.findAll();
  }

  @Get(':id')
  @Auth(Role.ADMIN)
  findOne(@Param('id') id: string) {
    return this.formService.findOne(id);
  }

  @Put(':id')
  @Auth(Role.ADMIN)
  update(
    @Param('id') id: string,
    @Body() input: UpdateFormDto,
  ) {
    return this.formService.update(id, input);
  }

  @Delete(':id')
  @Auth(Role.ADMIN)
  remove(@Param('id') id: string) {
    return this.formService.disable(id);
  }

}
