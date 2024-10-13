import { ApiProperty } from '@nestjs/swagger';
import { Transform } from 'class-transformer';
import { IsEmail, IsEnum, IsString, MinLength } from 'class-validator';
import { Departments } from 'src/common/enums/departments.enum';

export class RegisterDto {
  @ApiProperty()
  @IsString()
  @MinLength(4)
  dni: string;

  @ApiProperty()
  @IsString()
  @MinLength(2)
  fullName: string;

  @ApiProperty()
  @IsString()
  @MinLength(2)
  position: string;

  @ApiProperty()
  @IsEnum(Departments)
  department: Departments;

  @ApiProperty()
  @IsEmail()
  @Transform(({ value }) => value.toLowerCase())
  email: string;

  @ApiProperty()
  @IsString()
  @MinLength(6)
  @Transform(({ value }) => value.trim())
  password: string;
}
