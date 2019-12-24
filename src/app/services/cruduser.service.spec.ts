import { TestBed } from '@angular/core/testing';

import { CruduserService } from './cruduser.service';

describe('CruduserService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CruduserService = TestBed.get(CruduserService);
    expect(service).toBeTruthy();
  });
});
