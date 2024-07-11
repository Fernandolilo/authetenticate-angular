import { TestBed } from '@angular/core/testing';

import { InterceptorJWTService } from './interceptor-jwt.service';

describe('InterceptorJWTService', () => {
  let service: InterceptorJWTService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(InterceptorJWTService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
