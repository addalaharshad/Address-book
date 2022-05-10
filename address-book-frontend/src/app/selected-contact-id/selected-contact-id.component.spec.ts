import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectedContactIdComponent } from './selected-contact-id.component';

describe('SelectedContactIdComponent', () => {
  let component: SelectedContactIdComponent;
  let fixture: ComponentFixture<SelectedContactIdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SelectedContactIdComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectedContactIdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
