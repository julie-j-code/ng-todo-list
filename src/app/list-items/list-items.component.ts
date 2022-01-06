import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-items',
  templateUrl: './list-items.component.html',
  styleUrls: ['./list-items.component.css']
})
export class ListItemsComponent implements OnInit {
@Input() listItem:any;
@Input() favouriteIcon:any;



  constructor() { }

  ngOnInit(): void {
  }

  toggleFavourite(){
    this.listItem.favourite = !this.listItem.favourite;
    this.favouriteIcon = "grade"
  }

}
