import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogInformationsComponent } from './dialog-informations.component';

describe('DialogInformationsComponent', () => {
  let component: DialogInformationsComponent;
  let fixture: ComponentFixture<DialogInformationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogInformationsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogInformationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
