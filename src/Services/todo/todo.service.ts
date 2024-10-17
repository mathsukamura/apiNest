import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { todo } from 'src/Domain/Model/Todo/todo.model';
import { Repository } from 'typeorm';

@Injectable()
export class TodoService {
    constructor(
        @InjectRepository(todo)
        private todoRepository: Repository<todo>,
      ) {}
    
      GetAll(): Promise<todo[]> {
        return this.todoRepository.find();
      }
    
      GetById(id: number): Promise<todo> {
        return this.todoRepository.findOneBy({ id });
      }
    
      create(todo: todo): Promise<todo> {
        return this.todoRepository.save(todo);
      }
    
      async update(id: number, todo: todo): Promise<void> {
        await this.todoRepository.update(id, todo);
      }
    
      async remove(id: number): Promise<void> {
        await this.todoRepository.delete(id);
      }
}

