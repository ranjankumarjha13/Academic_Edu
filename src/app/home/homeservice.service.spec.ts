import { TestBed } from '@angular/core/testing';

import { CLHomeserviceService } from './homeservice.service';

describe('HomeserviceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CLHomeserviceService = TestBed.get(CLHomeserviceService);
    expect(service).toBeTruthy();
  });
});
