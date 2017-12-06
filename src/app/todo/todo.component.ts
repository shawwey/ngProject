import { Component, OnInit } from '@angular/core';
import { Todo } from './todo.model';
import { UUID } from 'angular2-uuid';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {

  todos:Todo[]=[];
  
  constructor() { }

  ngOnInit() {
  
  }
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
