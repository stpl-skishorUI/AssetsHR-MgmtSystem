import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ItemIssueReturnRoutingModule } from './item-issue-return-routing.module';
import { ItemIssueReturnComponent } from './item-issue-return.component';
import { MaterialModule } from 'src/app/shared/angularMaterialModule/material.module';


@NgModule({
  declarations: [
    ItemIssueReturnComponent
  ],
  imports: [
    CommonModule,
    ItemIssueReturnRoutingModule,
    MaterialModule
  ]
})
export class ItemIssueReturnModule { }
