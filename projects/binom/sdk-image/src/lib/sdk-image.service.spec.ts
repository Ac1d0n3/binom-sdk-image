import { TestBed } from '@angular/core/testing';

import { SdkImageService } from './sdk-image.service';

describe('SdkImageService', () => {
  let service: SdkImageService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SdkImageService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
