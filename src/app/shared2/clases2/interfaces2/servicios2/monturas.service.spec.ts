import { TestBed } from '@angular/core/testing';

import { MonturasService } from './monturas.service';

describe('MonturasService', () => {
  let service: MonturasService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MonturasService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
