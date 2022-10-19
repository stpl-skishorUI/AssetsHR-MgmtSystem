import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ItemIssueReturnRoutingModule } from './item-issue-return-routing.module';
import { ItemIssueReturnComponent } from './item-issue-return.component';


@NgModule({
  declarations: [
    ItemIssueReturnComponent
  ],
  imports: [
    CommonModule,
    ItemIssueReturnRoutingModule
  ]
})
export class ItemIssueReturnModule { }
