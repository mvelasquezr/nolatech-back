import {
  BadRequestException,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { UsersService } from 'src/users/users.service';
import { RegisterDto } from './dto/register.dto';
import * as bcryptjs from 'bcryptjs';
import { EmployeesService } from 'src/employees/employees.service';
import { Role } from 'src/common/enums/role.enum';
import { LoginDto } from './dto/login.dto';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(
    private readonly usersService: UsersService,
    private readonly employeeService: EmployeesService,
    private readonly jwtService: JwtService,
  ) {}

  async login({ email, password }: LoginDto) {
    const user = await this.usersService.findOneByEmail(email);

    if (!user) {
      throw new UnauthorizedException('Invalid email');
    }

    const isPasswordValid = await bcryptjs.compare(password, user.password);

    if (!isPasswordValid) {
      throw new UnauthorizedException('Invalid password');
    }
    delete user.password
    delete user.employee   
    console.log(user)
    const token = await this.jwtService.signAsync({_id:user._id, role: user.role, email:user.email});
    return {
      token,
      user,
    };
  }

  async register(input: RegisterDto) {      
    const employee = await this.employeeService.create(input);
    
    await this.usersService.create({
      role: Role.EMPLOYEE,
      email:input.email,
      password: await bcryptjs.hash(input.password, 10),
      employee,
    });

    return true
  }
}
