import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxMatPhonenumberComponent } from './ngx-mat-phonenumber.component';

describe('NgxMatPhonenumberComponent', () => {
  let component: NgxMatPhonenumberComponent;
  let fixture: ComponentFixture<NgxMatPhonenumberComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgxMatPhonenumberComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NgxMatPhonenumberComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
