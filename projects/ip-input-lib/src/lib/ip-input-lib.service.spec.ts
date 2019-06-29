import { TestBed } from '@angular/core/testing';

import { IpInputLibService } from './ip-input-lib.service';

describe('IpInputLibService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: IpInputLibService = TestBed.get(IpInputLibService);
    expect(service).toBeTruthy();
  });
});
