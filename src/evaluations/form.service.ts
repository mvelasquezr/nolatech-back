import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Evaluation } from './entities/evaluation.entity';
import { Form } from './entities/form.entity';
import { CreateFormDto } from './dto/create-form.dto';
import { UpdateFormDto } from './dto/update-form.dto';

@Injectable()
export class FormService {
  constructor(
    @InjectModel(Form.name) private formModel: Model<Form>,
    @InjectModel(Evaluation.name) private evaluationModel: Model<Evaluation>,    
  ) {}

  async create(input: CreateFormDto):Promise<Form> {
    return await new this.formModel(input).save();    
  }

  async findAll(): Promise<Form[]> {
    return await this.formModel.find().exec();      
  }  

  async findOne(id: string): Promise<Form> {
    
    const form = await this.formModel
      .findById(id)
      .exec();
    if(!form)
      throw new BadRequestException('error, form not exists');  
    
    return form;
  }

  async update(
    id:string,
    input: UpdateFormDto,
  ): Promise<Form> {
    await this.validate(id)
    return await this.formModel.findByIdAndUpdate(
      id,
      input,
      { new: true },
    );
  }

  async validate(id:string){
    await this.findOne(id)
              
    const evaluation = await this.evaluationModel.findOne({form:id})
    if(!evaluation)
      throw new BadRequestException('error, can not modify this form because has completed evaluations');       
  }  

  async disable(id: string): Promise<string> {
    const form = await this.findOne(id)
    await this.formModel.findByIdAndUpdate(id, { active:!form.active });
    return `done`;
  }
}
