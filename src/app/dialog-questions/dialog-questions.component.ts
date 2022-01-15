import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-dialog-questions',
  templateUrl: './dialog-questions.component.html',
  styleUrls: ['./dialog-questions.component.css']
})
export class DialogQuestionsComponent implements OnInit {
  title: string;
  text: string;
  labelYes: boolean;
  labelNo: boolean;

  constructor(
    @Inject(MAT_DIALOG_DATA) public data
    , public dialogRef: MatDialogRef<DialogQuestionsComponent>) {
    this.title = data.title;
    this.text = data.text;
    this.labelYes = data.labelYes;
    this.labelNo = data.labelNo;
  }

  ngOnInit(): void {
  }

  sendAnswer(answer){
    this.dialogRef.close(answer)
  }

}
