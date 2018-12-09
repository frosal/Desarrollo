import { TestBed } from '@angular/core/testing';

import { InisesService } from './inises.service';

describe('InisesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: InisesService = TestBed.get(InisesService);
    expect(service).toBeTruthy();
  });
});
