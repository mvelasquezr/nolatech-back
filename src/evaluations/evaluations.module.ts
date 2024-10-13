import { Module } from '@nestjs/common';
import { EvaluationsService } from './evaluations.service';

import { MongooseModule } from '@nestjs/mongoose';
import { Evaluation, EvaluationSchema } from './entities/evaluation.entity';
import { User, UserSchema } from 'src/users/entities/user.entity';
import { EvaluationsController } from './evaluations.controller';
import { Form, FormSchema } from './entities/form.entity';
import { FormController } from './form.controller';
import { FormService } from './form.service';


@Module({
  imports: [
    MongooseModule.forFeature([
      { name: Evaluation.name, schema: EvaluationSchema },
      { name: User.name, schema: UserSchema },
      { name: Form.name, schema: FormSchema },
    ]),
  ],
  controllers: [EvaluationsController, FormController],
  providers: [EvaluationsService, FormService],
  exports: [EvaluationsService],
})
export class EvaluationsModule {}
