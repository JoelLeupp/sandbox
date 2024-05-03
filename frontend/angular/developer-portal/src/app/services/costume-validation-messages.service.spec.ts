import { TestBed } from '@angular/core/testing';

import { CostumeValidationMessagesService } from './costume-validation-messages.service';

describe('CostumeValidationMessagesService', () => {
  let service: CostumeValidationMessagesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CostumeValidationMessagesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
