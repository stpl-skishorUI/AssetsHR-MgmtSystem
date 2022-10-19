import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ItemCategoryMasterComponent } from './item-category-master.component';

const routes: Routes = [{ path: '', component: ItemCategoryMasterComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ItemCategoryMasterRoutingModule { }
