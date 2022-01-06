import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
// btnColor= "accent";
// name="julie";
toDoList=[

  {
    title:"My first task",
    dueDate:"28/01/2022",
    completed:true,
    favourite:true
  },
  {
    title:"UX Design Interior Template",
    dueDate:"25/01/2021",
    completed:true,
    favourite:true
  },
  {
    title:"New Angular Project",
    dueDate:"17/02/2022",
    completed:false,
    favourite:false
  },
  {
    title:"Do my video",
    dueDate:"17/02/2022",
    completed:false,
    favourite:false
  },
  {
    title:"Improve Design",
    dueDate:"17/02/2022",
    completed:true,
    favourite:false
  }
]

favouriteIcon="home";

  constructor() { }

  ngOnInit(): void {
  }

  logListItems(){
    console.table([
      this.toDoList

    ]);
  }

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
