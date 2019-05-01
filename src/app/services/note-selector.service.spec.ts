import { TestBed } from '@angular/core/testing';

import { NoteSelectorService } from './note-selector.service';

describe('NoteSelectorService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: NoteSelectorService = TestBed.get(NoteSelectorService);
    expect(service).toBeTruthy();
  });
});
