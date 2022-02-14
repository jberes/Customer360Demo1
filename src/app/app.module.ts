import { NgModule } from '@angular/core';
import { BrowserModule, HammerModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CustomersComponent } from './customers/customers.component';
import { DashboardViewComponent } from './dashboard-view/dashboard-view.component';
import { DashboardsComponent } from './dashboards/dashboards.component';
import { IgxCardModule, IgxAvatarModule, IgxNavbarModule, IgxButtonModule, IgxRippleModule, IgxToggleModule, IgxIconModule, IgxNavigationDrawerModule } from 'igniteui-angular';
import { FormsModule } from '@angular/forms';
import { SchedulingComponent } from './scheduling/scheduling.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    CustomersComponent,
    DashboardViewComponent,
    DashboardsComponent,
    SchedulingComponent
  ],
  imports: [
    BrowserModule,
    HammerModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    IgxCardModule,
    IgxAvatarModule,
    FormsModule,
    IgxNavbarModule,
    IgxButtonModule,
    IgxRippleModule,
    IgxToggleModule,
    IgxIconModule,
    IgxNavigationDrawerModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
