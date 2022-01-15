import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogQuestionsComponent } from './dialog-questions.component';

describe('DialogQuestionsComponent', () => {
  let component: DialogQuestionsComponent;
  let fixture: ComponentFixture<DialogQuestionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogQuestionsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogQuestionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
