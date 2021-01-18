import { TestBed, async, inject } from '@angular/core/testing';

import { ExitpageGuard } from './exitpage.guard';

describe('ExitpageGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ExitpageGuard]
    });
  });

  it('should ...', inject([ExitpageGuard], (guard: ExitpageGuard) => {
    expect(guard).toBeTruthy();
  }));
});
