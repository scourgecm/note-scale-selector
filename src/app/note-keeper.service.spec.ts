import { TestBed } from '@angular/core/testing';

import { NoteKeeperService } from './note-keeper.service';

describe('NoteKeeperService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: NoteKeeperService = TestBed.get(NoteKeeperService);
    expect(service).toBeTruthy();
  });
});
