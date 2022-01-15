import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogInformationsComponent } from '../dialog-informations/dialog-informations.component';
import { DialogQuestionsComponent } from '../dialog-questions/dialog-questions.component';

@Component({
  selector: 'app-list-items',
  templateUrl: './list-items.component.html',
  styleUrls: ['./list-items.component.css']
})
export class ListItemsComponent implements OnInit {
@Input() listItem:any;
@Input() favouriteIcon:any;



  constructor(public dialog:MatDialog) { }

  ngOnInit(): void {
  }

  toggleFavourite(){
    this.listItem.favourite = !this.listItem.favourite;
    this.favouriteIcon = "grade"
  }

  openDialog(){
    // alert("message");
    const myDialog = this.dialog.open(DialogQuestionsComponent, {
      disableClose:true,
      // on rajoute pour les données contextuelles une clée data
      data : {
        title:'My Title',
        text : 'Voici le contenu textuel de la data',
        labelNo: 'Finalement, non merci ! ',
        labelYes: 'Ok vas-y !'

      }
    });
    myDialog.afterClosed().subscribe(result=>{
      console.log(result);
    })
  }



}
