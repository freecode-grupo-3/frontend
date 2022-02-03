import { TestBed } from '@angular/core/testing';

import { DiseasesAndNeedsService } from './diseases-and-needs.service';

describe('DiseasesAndNeedsService', () => {
  let service: DiseasesAndNeedsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DiseasesAndNeedsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
