import { TestBed } from '@angular/core/testing';

import { IsPhoneNumberService } from './is-phone-number.service';

describe('IsPhoneNumberService', () => {
  let service: IsPhoneNumberService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(IsPhoneNumberService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
