import { TestBed } from '@angular/core/testing';

import { RoastService } from './roast-service.service';

describe('RoastServiceService', () => {
  let service: RoastService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RoastService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
