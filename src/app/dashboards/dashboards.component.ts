import { Component, OnInit } from '@angular/core';
import { DashboardDetailsService } from '../services/dashboard-details.service';

@Component({
  selector: 'app-dashboards',
  templateUrl: './dashboards.component.html',
  styleUrls: ['./dashboards.component.scss']
})
export class DashboardsComponent implements OnInit {
  public dashboardDetailsDetails: any = null;

  constructor(
    private dashboardDetailsService: DashboardDetailsService,
  ) {}

  ngOnInit() {
    // depending on implementation, data subscriptions might need to be unsubbed later
    this.dashboardDetailsService.getDetails().subscribe(data => this.dashboardDetailsDetails = data);
  }
}
