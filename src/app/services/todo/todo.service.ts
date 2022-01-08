import { Injectable } from '@angular/core';
import { addListener } from 'process';
import { TodoItem } from 'src/app/models/todo-item.model';
import { TodoList } from 'src/app/models/todo-list.model';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  L_KEY_TODOLIST  = "todo-list";
  todoListsArray: TodoList[] = [];



  constructor() {
    // const todoList = new TodoList("default");
    // todoList.todos.push(new TodoItem("something to do"));
    // todoList.todos.push(new TodoItem("some other thing to do"));
    // todoList.todos.push(new TodoItem("and an other thing"));


    // const todoList2 = new TodoList("work");
    // todoList2.todos.push(new TodoItem("some other thing to do"));
    // todoList2.todos.push(new TodoItem("and an other thing"));

    // const todoList3 = new TodoList("perso");
    // todoList3.todos.push(new TodoItem("some personal task to do"));
    // todoList3.todos.push(new TodoItem("some other personal task"));

    // this.todoListsArray.push(todoList);
    // this.todoListsArray.push(todoList2);
    // this.todoListsArray.push(todoList3);

  }

  getTodoLists() {
    const todoListsString = localStorage.getItem(this.L_KEY_TODOLIST);
    if(todoListsString){
      this.todoListsArray=JSON.parse(todoListsString);
    }else{
      this.todoListsArray=[]
    }
return this.todoListsArray;
  }
  
  addList(listName){
    this.todoListsArray.push(new TodoList(listName));
    localStorage.setItem(this.L_KEY_TODOLIST, JSON.stringify(this.todoListsArray));
  }

  addListItem(listId, itemName){
    const listObject = this.todoListsArray.filter(listItem=>listItem.id===listId)[0];
    listObject.todos.push(new TodoItem(itemName));
  }
}

