import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ItemParamterMasterComponent } from './item-paramter-master.component';

const routes: Routes = [{ path: '', component: ItemParamterMasterComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ItemParamterMasterRoutingModule { }
