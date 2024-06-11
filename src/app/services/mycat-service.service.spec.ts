import { TestBed } from '@angular/core/testing';

import { MycatServiceService } from './mycat-service.service';

describe('MycatServiceService', () => {
  let service: MycatServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MycatServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
