import { TestBed } from '@angular/core/testing';

import { FridgesService } from './fridges.service';

describe('FridgesService', () => {
  let service: FridgesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FridgesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
