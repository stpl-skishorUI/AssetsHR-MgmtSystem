import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ItemScrapDonatedComponent } from './item-scrap-donated.component';

const routes: Routes = [{ path: '', component: ItemScrapDonatedComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ItemScrapDonatedRoutingModule { }
