import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ItemGroupMasterRoutingModule } from './item-group-master-routing.module';
import { ItemGroupMasterComponent } from './item-group-master.component';


@NgModule({
  declarations: [
    ItemGroupMasterComponent
  ],
  imports: [
    CommonModule,
    ItemGroupMasterRoutingModule
  ]
})
export class ItemGroupMasterModule { }
