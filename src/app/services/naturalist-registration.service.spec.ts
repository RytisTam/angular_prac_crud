import { TestBed } from '@angular/core/testing';

import { NaturalistRegistrationService } from './naturalist-registration.service';

describe('NaturalistRegistrationService', () => {
  let service: NaturalistRegistrationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NaturalistRegistrationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
