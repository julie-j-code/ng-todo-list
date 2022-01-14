import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
// import { EventEmitter } from 'stream';
import { TodoService } from '../services/todo/todo.service';

@Component({
  selector: 'app-new-list-input',
  templateUrl: './new-list-input.component.html',
  styleUrls: ['./new-list-input.component.css']
})
export class NewListInputComponent implements OnInit {
  // attention à l'import de EventEmitter ! 
  @Output() itemAdded= new EventEmitter<null>();
  newListForm: FormGroup;

  constructor(private toDoService: TodoService) { }

  ngOnInit(): void {
    this.newListForm = new FormGroup({
      'listName': new FormControl(null, Validators.required)
    });
  }

  addList($event, formDirective) {
    if (this.newListForm.valid) {
      this.toDoService.addList(this.newListForm.value.listName);
      // je ne connaissais pas ! 
      formDirective.resetForm();
      this.newListForm.reset();
      this.itemAdded.emit
    }

  }
}
