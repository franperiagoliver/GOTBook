import { TestBed, inject } from '@angular/core/testing';

import { RelationsService } from './relations.service';

describe('RelationsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RelationsService]
    });
  });

  it('should be created', inject([RelationsService], (service: RelationsService) => {
    expect(service).toBeTruthy();
  }));
});
