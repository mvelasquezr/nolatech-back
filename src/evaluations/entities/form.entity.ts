import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument, Schema as MongooseSchema } from 'mongoose';
import { Question } from './question.entity';

export type FormDocument = HydratedDocument<Form>;

@Schema({ timestamps: true })
export class Form {

  @Prop()
  title: string

  @Prop()
  description: string

  @Prop()
  questions: Question[];

  @Prop({default:false})
  active: boolean;
}

export const FormSchema = SchemaFactory.createForClass(Form);
