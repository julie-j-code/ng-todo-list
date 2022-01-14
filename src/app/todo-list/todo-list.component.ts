import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {
  @Input() todoList;

  constructor() { }

  ngOnInit(): void {
  }

  getFavouriteTasks(isFavourite){
    return this.todoList.filter(item=>item.favourite===isFavourite)
  }

}
