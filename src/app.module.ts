import { Module } from '@nestjs/common';
import { AuthModule } from './auth/auth.module';
import { CommomModule } from './common/modules/common.module';
import { EmployeesModule } from './employees/employees.module';
import { EvaluationsModule } from './evaluations/evaluations.module';
import { UsersModule } from './users/users.module';

@Module({
  imports: [
    CommomModule, 
    AuthModule, 
    UsersModule, 
    EmployeesModule,
    EvaluationsModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
