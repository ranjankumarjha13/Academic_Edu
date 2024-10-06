import { TestBed } from '@angular/core/testing';

import { CLLoginserviceService } from './loginservice.service';

describe('LoginserviceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CLLoginserviceService = TestBed.get(CLLoginserviceService);
    expect(service).toBeTruthy();
  });
});
