import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
// btnColor= "accent";
// name="julie";
listItem={
  title:"My first task",
  dueDate:"28/01/2022",
  completed:true,
  favourite:true
};
listItem2={
  title:"My second task",
  dueDate:"25/01/2022",
  completed:false,
  favourite:true
};
listItem3={
  title:"My third task",
  dueDate:"17/02/2022",
  completed:false,
  favourite:false
};

favouriteIcon="home";

  constructor() { }

  ngOnInit(): void {
  }

  logListItems(){
    console.table([
      this.listItem,
      this.listItem2,
      this.listItem3
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
