import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { todo } from 'src/Domain/Model/Todo/todo.model';
import { TodoService } from 'src/Services/todo/todo.service';

@Controller('todo')
export class TodoController {
    constructor(private readonly todoService: TodoService) {}
    
    @Get()
    GetAllAsync(): Promise<todo[]> {
      return this.todoService.GetAll();
    }


    @Post()
    PostAsync(@Body() todo: todo): Promise<todo> {
      return this.todoService.create(todo);
    }


    @Put(':id')
    PutAsync(@Param() id: number,@Body() todo: todo): Promise<void> {
      return this.todoService.update(id, todo);
    }


    @Delete(':id')
    DeleteAsync(@Param() id: number): Promise<void> {
      return this.todoService.remove(id);
    }
}
