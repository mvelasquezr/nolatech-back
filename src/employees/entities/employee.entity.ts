import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument, Schema as MongooseSchema } from 'mongoose';
import { Departments } from 'src/common/enums/departments.enum';

export type EmployeeDocument = HydratedDocument<Employee>;

@Schema({ timestamps: true })
export class Employee {
  _id: MongooseSchema.Types.ObjectId;

  @Prop({ unique: true })
  dni: string;

  @Prop({default:''})
  fullName: string;

  @Prop({default:''})
  position: string;

  @Prop({default:Departments.DEVELOP})
  department: Departments;
}

export const EmployeeSchema = SchemaFactory.createForClass(Employee);
