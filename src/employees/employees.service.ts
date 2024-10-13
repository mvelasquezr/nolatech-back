import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Employee } from './entities/employee.entity';
import { Model } from 'mongoose';
import { CreateEmployeeDto } from './dto/create-employee.dto';

@Injectable()
export class EmployeesService {
  constructor(
    @InjectModel(Employee.name) private employeeModel: Model<Employee>,
  ) {}

  async findAll(): Promise<Employee[]> {
    return await this.employeeModel.find().exec();
  }

  async verifyDuplicate(dni: string) {
    const result = await this.employeeModel.findOne({ dni })
    if(result)
      throw new BadRequestException('error, this Dni already exists');  
  }

  async create(input: CreateEmployeeDto): Promise<Employee> {
    await this.verifyDuplicate(input.dni)
    return await new this.employeeModel(input).save();    
  }
}
