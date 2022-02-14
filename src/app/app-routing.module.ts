import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PageNotFoundComponent } from './error-routing/not-found/not-found.component';
import { UncaughtErrorComponent } from './error-routing/error/uncaught-error.component';
import { ErrorRoutingModule } from './error-routing/error-routing.module';
import { CustomersComponent } from './customers/customers.component';
import { DashboardViewComponent } from './dashboard-view/dashboard-view.component';
import { DashboardsComponent } from './dashboards/dashboards.component';
import { SchedulingComponent } from './scheduling/scheduling.component';

export const routes: Routes = [
  { path: '', redirectTo: 'dashboards', pathMatch: 'full' },
  { path: 'error', component: UncaughtErrorComponent },
  { path: 'customers', component: CustomersComponent, data: { text: 'Customers' } },
  { path: 'dashboard-view', component: DashboardViewComponent, data: { text: 'DashboardView' } },
  { path: 'dashboards', component: DashboardsComponent, data: { text: 'Dashboards' } },
  { path: 'scheduling', component: SchedulingComponent, data: { text: 'Scheduling' } },
  { path: '**', component: PageNotFoundComponent } // must always be last
];

@NgModule({
  imports: [RouterModule.forRoot(routes), ErrorRoutingModule],
  exports: [RouterModule, ErrorRoutingModule]
})
export class AppRoutingModule {
}
