import { Injectable } from '@angular/core';
import { TodoItem } from 'src/app/models/todo-item.model';
import { TodoList } from 'src/app/models/todo-list.model';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  todoListsArray: TodoList[] = [];



  constructor() {
    const todoList = new TodoList("default");
    todoList.todos.push(new TodoItem("something to do"));
    todoList.todos.push(new TodoItem("some other thing to do"));
    todoList.todos.push(new TodoItem("and an other thing"));


    const todoList2 = new TodoList("work");
    todoList2.todos.push(new TodoItem("some other thing to do"));
    todoList2.todos.push(new TodoItem("and an other thing"));

    const todoList3 = new TodoList("perso");
    todoList3.todos.push(new TodoItem("some personal task to do"));
    todoList3.todos.push(new TodoItem("some other personal task"));

    this.todoListsArray.push(todoList);
    this.todoListsArray.push(todoList2);
    this.todoListsArray.push(todoList3);

  }

  getTodoLists() {
    return this.todoListsArray;
  }

}
