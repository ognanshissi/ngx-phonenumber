import { TestBed } from '@angular/core/testing';

import { NgxMatPhonenumberService } from './ngx-mat-phonenumber.service';

describe('NgxMatPhonenumberService', () => {
  let service: NgxMatPhonenumberService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NgxMatPhonenumberService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
