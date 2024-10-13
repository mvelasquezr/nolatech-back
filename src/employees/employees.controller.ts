import { Controller, Get } from '@nestjs/common';
import { EmployeesService } from './employees.service';
import { ApiTags } from '@nestjs/swagger';
import { Auth } from 'src/auth/decorators/auth.decorator';
import { Role } from 'src/common/enums/role.enum';


@ApiTags('Employees')
@Controller('employees')
export class EmployeesController {
  constructor(private readonly employeesService: EmployeesService) {}

  @Get()
  @Auth(Role.MANAGER)
  findAll() {
    return this.employeesService.findAll();
  }
}
