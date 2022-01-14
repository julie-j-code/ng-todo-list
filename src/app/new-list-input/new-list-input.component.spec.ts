import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewListInputComponent } from './new-list-input.component';

describe('NewListInputComponent', () => {
  let component: NewListInputComponent;
  let fixture: ComponentFixture<NewListInputComponent>;



  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewListInputComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewListInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
