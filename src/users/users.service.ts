import { BadRequestException, Injectable, OnModuleInit } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { User } from './entities/user.entity';
import { Model } from 'mongoose';
import { CreateUserDto } from './dto/create-user.dto';
import { Role } from 'src/common/enums/role.enum';
import * as bcryptjs from 'bcryptjs';

@Injectable()
export class UsersService implements OnModuleInit {
  constructor(@InjectModel(User.name) private userModel: Model<User>) {}

  async onModuleInit() {
    try {
      const res = await this.userModel.findOne({role: Role.ADMIN});
      //empty bdd, add default users
      if (!res) {               
        await this.create({
          email: 'admin@nolatech.ai',
          password: await bcryptjs.hash('admin', 10),
          role: Role.ADMIN,
        });            
        await this.create({
          email: 'manager@nolatech.ai',
          password: await bcryptjs.hash('manager', 10),
          role: Role.MANAGER,
        });    
      }      
    } catch (error) {
      throw error;
    }
  }

  async findOneByEmail(email: string) {
    return await this.userModel.findOne({ email }).populate('employee');
  }

  async verifyDuplicate(email: string) {
    const result = await this.findOneByEmail(email)
    if(result)
      throw new BadRequestException('error, this Email already exists');  
  }

  async create(createUserDto: CreateUserDto): Promise<User> {
    await this.verifyDuplicate(createUserDto.email)
    return await new this.userModel(createUserDto).save();    
  }
}
