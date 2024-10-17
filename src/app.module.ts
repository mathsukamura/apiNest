import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TodoModule } from './Controllers/todo/todo.module';
import { todo } from './Domain/Model/Todo/todo.model';

@Module({
  imports: [  
    TypeOrmModule.forRoot({
    type: 'sqlite',
    database: 'database.sqlite',
    entities: [todo],
    synchronize: true,
  }),
  TypeOrmModule.forFeature([todo]),
  TodoModule
],
  controllers: [],
  providers: [],
})
export class AppModule {}
