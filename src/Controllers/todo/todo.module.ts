import { Module } from '@nestjs/common';
import { TodoController } from './todo.controller';
import { TodoService } from 'src/Services/todo/todo.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { todo } from 'src/Domain/Model/Todo/todo.model';

@Module({
    imports:[TypeOrmModule.forFeature([todo])],
    providers: [TodoService],
    controllers: [TodoController]
})
export class TodoModule {}
