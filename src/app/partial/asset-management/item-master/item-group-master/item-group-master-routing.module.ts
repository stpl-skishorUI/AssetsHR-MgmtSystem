import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ItemGroupMasterComponent } from './item-group-master.component';

const routes: Routes = [{ path: '', component: ItemGroupMasterComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ItemGroupMasterRoutingModule { }
