import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { MongoModule } from './mongo/mongo.module';

const configModule = ConfigModule.forRoot({
  isGlobal: true,
});

@Module({
  imports: [   
    configModule,   
    MongoModule,    
  ],
  exports: [
    configModule,    
    MongoModule,   
  ],
})
export class CommomModule {}
