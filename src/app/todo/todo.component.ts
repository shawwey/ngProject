import { Component, OnInit } from '@angular/core';
import { Todo } from './todo.model';
import { UUID } from 'angular2-uuid';

import { TodoService } from '../core/todo.service';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css'],
  providers: [TodoService]
})
export class TodoComponent implements OnInit {
  todos:Todo[]=[];
  desc: string = '';
  constructor(private service:TodoService) { }

  ngOnInit() {
    this.getTodos();
  }
  getTodos(): void {
    this.service
      .getTodos()
      .then(todos => this.todos = [...todos]);
  }
  // addTodo(desc:string):Todo[]{
  //   console.log(this.service.addTodo(desc));
  //   return this.todos;
  // }
  // addTodo(desc:string){
  //   this.service
  //     .addTodo(desc)
  //     .then(todos => {
  //       this.todos = [...this.todos, todos];
  //       desc = '';
  //     });
  // }
  addTodo(todoItem:string):Todo[]{
    let todo = {
      id:UUID.UUID(),
      desc:todoItem,
      completed:false
    };
    //this.todos.push({id:1,desc:this.desc,completed:false});
    this.todos.push(todo);
    return this.todos;   
  }

}
