import { TestBed, inject } from '@angular/core/testing';

import { CharactService } from './charact.service';

describe('CharactService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CharactService]
    });
  });

  it('should be created', inject([CharactService], (service: CharactService) => {
    expect(service).toBeTruthy();
  }));
});
