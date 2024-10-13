import { IsEnum, IsString } from 'class-validator';
import { Departments } from 'src/common/enums/departments.enum';

export class CreateEmployeeDto {
  @IsString()
  dni: string;

  @IsString()
  fullName: string;

  @IsString()
  position: string;

  @IsString()
  @IsEnum(Departments)
  department:Departments;
}
