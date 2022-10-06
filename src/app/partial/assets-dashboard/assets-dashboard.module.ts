import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AssetsDashboardRoutingModule } from './assets-dashboard-routing.module';
import { AssetsDashboardComponent } from './assets-dashboard.component';
import { MaterialModule } from 'src/app/shared/angularMaterialModule/material.module';


@NgModule({
  declarations: [
    AssetsDashboardComponent
  ],
  imports: [
    CommonModule,
    AssetsDashboardRoutingModule,
    MaterialModule
  ]
})
export class AssetsDashboardModule { }
