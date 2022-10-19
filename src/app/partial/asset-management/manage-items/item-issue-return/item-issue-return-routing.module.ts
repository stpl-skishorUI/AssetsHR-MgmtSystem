import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ItemIssueReturnComponent } from './item-issue-return.component';

const routes: Routes = [{ path: '', component: ItemIssueReturnComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ItemIssueReturnRoutingModule { }
