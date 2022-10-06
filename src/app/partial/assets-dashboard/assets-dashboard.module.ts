import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AssetsDashboardRoutingModule } from './assets-dashboard-routing.module';
import { AssetsDashboardComponent } from './assets-dashboard.component';


@NgModule({
  declarations: [
    AssetsDashboardComponent
  ],
  imports: [
    CommonModule,
    AssetsDashboardRoutingModule
  ]
})
export class AssetsDashboardModule { }
