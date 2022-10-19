import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ItemRepairIssueReturnComponent } from './item-repair-issue-return.component';

const routes: Routes = [{ path: '', component: ItemRepairIssueReturnComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ItemRepairIssueReturnRoutingModule { }
