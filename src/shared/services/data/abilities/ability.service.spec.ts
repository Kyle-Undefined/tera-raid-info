import { TestBed } from '@angular/core/testing';

import { AbilityService } from './ability.service';

describe('AbilityService', () => {
  let service: AbilityService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AbilityService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
