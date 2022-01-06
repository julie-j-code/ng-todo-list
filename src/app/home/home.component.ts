import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
btnColor= "accent";
name="julie";

  constructor() { }

  ngOnInit(): void {
  }

  btnChangeColor(){
    if (this.btnColor==="primary"){
      this.btnColor="accent";
    }
    else {this.btnColor="primary"}
  }

  resetName(){
    this.name="julie"
  }

 updateName(value){
    this.name=value
  }
}
