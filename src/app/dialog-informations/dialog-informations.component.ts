import { Component, Inject, OnInit } from '@angular/core';
import { inject } from '@angular/core/testing';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-dialog-informations',
  templateUrl: './dialog-informations.component.html',
  styleUrls: ['./dialog-informations.component.css']
})
export class DialogInformationsComponent implements OnInit {
title:string;
text:string;
labelOk:string;

  constructor(
    @Inject(MAT_DIALOG_DATA) public data
  ) { 
    this.title=data.title;
    this.text=data.text;
    this.labelOk=data.labelOk;
  }

  ngOnInit(): void {
  }

}
