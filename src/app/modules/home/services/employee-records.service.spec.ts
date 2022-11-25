import { TestBed } from '@angular/core/testing';

import { EmployeeRecordsService } from './employee-records.service';

describe('EmployeeRecordsService', () => {
  let service: EmployeeRecordsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EmployeeRecordsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
