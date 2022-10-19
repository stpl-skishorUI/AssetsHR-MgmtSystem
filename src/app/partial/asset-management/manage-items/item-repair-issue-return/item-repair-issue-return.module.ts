import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ItemRepairIssueReturnRoutingModule } from './item-repair-issue-return-routing.module';
import { ItemRepairIssueReturnComponent } from './item-repair-issue-return.component';


@NgModule({
  declarations: [
    ItemRepairIssueReturnComponent
  ],
  imports: [
    CommonModule,
    ItemRepairIssueReturnRoutingModule
  ]
})
export class ItemRepairIssueReturnModule { }
