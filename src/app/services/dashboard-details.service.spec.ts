import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { DashboardDetailsService } from './dashboard-details.service';

describe('DashboardDetailsService', () => {
  let service: DashboardDetailsService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule]
    });
    service = TestBed.inject(DashboardDetailsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
