import { BadRequestException, Injectable } from '@nestjs/common';
import { CreateEvaluationDto } from './dto/create-evaluation.dto';
import { 
  UpdateEvaluationDto,
} from './dto/update-evaluation.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Evaluation } from './entities/evaluation.entity';
import { User } from 'src/users/entities/user.entity';

@Injectable()
export class EvaluationsService {
  constructor(
    @InjectModel(Evaluation.name) private evaluationModel: Model<Evaluation>,
    @InjectModel(User.name) private userModel: Model<User>,
  ) {}

  async create(createEvaluationDto: CreateEvaluationDto) {
    const created = new this.evaluationModel(createEvaluationDto);
    return created.save();
  }

  async findAll(form:string, madeFor:string): Promise<Evaluation[]> {
    return await this.evaluationModel
      .find({form, madeFor})
      .populate(['form'])
      .exec();
  }

  async findOne(id: string): Promise<Evaluation> {
    return await this.evaluationModel
      .findById(id)
      .populate(['form'])
      .exec();
  }

  /*async findAllPendingsByEvaluate(evaluated_by: string): Promise<Evaluation[]> {
    return await this.evaluationModel
      .find({ evaluated_by, is_completed: false })
      .populate(['employee', 'competencies'])
      .exec();
  }

  
*/
  async update(
    id: string,
    updateEvaluationDto: UpdateEvaluationDto,
  ): Promise<Evaluation> {
    return await this.evaluationModel.findByIdAndUpdate(
      id,
      updateEvaluationDto,
      { new: true },
    );
  }

  
}
