import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AssetsDashboardComponent } from './assets-dashboard.component';

const routes: Routes = [{ path: '', component: AssetsDashboardComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AssetsDashboardRoutingModule { }
