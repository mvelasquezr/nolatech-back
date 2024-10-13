import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument, Schema as MongooseSchema } from 'mongoose';
import { Employee } from 'src/employees/entities/employee.entity';
import { Form } from './form.entity';
import { Response } from './response.entity';

export type EvaluationDocument = HydratedDocument<Evaluation>;

@Schema({ timestamps: true })
export class Evaluation {

  @Prop({
    ref: Employee.name,
    type: MongooseSchema.Types.ObjectId,
  })
  madeFor: Employee;

  @Prop({
    ref: Employee.name,
    type: MongooseSchema.Types.ObjectId,
  })
  employee: Employee;

  @Prop({
    ref: Form.name,
    type: MongooseSchema.Types.ObjectId,
  })
  form: Employee;

  @Prop({default:[]})
  response: Response[];

  @Prop({ default: true })
  completed: boolean;
}

export const EvaluationSchema = SchemaFactory.createForClass(Evaluation);
