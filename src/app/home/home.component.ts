import { Component, OnInit } from '@angular/core';
import { TodoList } from '../models/todo-list.model';
import { TodoService } from '../services/todo/todo.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
// btnColor= "accent";
// name="julie";
// toDoList=[
//   {
//     title:"My first task",
//     dueDate:"28/01/2022",
//     completed:true,
//     favourite:true
//   },
//   {
//     title:"UX Design Interior Template",
//     dueDate:"25/01/2021",
//     completed:true,
//     favourite:true
//   },
//   {
//     title:"New Angular Project",
//     dueDate:"17/02/2022",
//     completed:false,
//     favourite:false
//   },
//   {
//     title:"Do my video",
//     dueDate:"17/02/2022",
//     completed:false,
//     favourite:false
//   },
//   {
//     title:"Improve Design",
//     dueDate:"17/02/2022",
//     completed:true,
//     favourite:false
//   }
// ]

todoListsArray:TodoList[];
selectedTodoList:TodoList;

favouriteIcon="home";

  constructor(private todoService:TodoService) { }

  ngOnInit(): void {
    this.todoListsArray=this.todoService.getTodoLists();
    this.selectedTodoList=this.todoListsArray[0];
  }

  selectTodoList(todoList){
    this.selectedTodoList=todoList
  }

  // logListItems(){
  //   console.table([
  //     this.todoListArray

  //   ]);
  // }

//   btnChangeColor(){
//     if (this.btnColor==="primary"){
//       this.btnColor="accent";
//     }
//     else {this.btnColor="primary"}
//   }

//   resetName(){
//     this.name="julie"
//   }

//  updateName(value){
//     this.name=value
//   }
}
