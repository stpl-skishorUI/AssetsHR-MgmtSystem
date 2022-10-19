import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ItemGroupMasterRoutingModule } from './item-group-master-routing.module';
import { ItemGroupMasterComponent } from './item-group-master.component';
import {MaterialModule} from 'src/app/shared/angularMaterialModule/material.module';

@NgModule({
  declarations: [
    ItemGroupMasterComponent
  ],
  imports: [
    CommonModule,
    ItemGroupMasterRoutingModule,
    MaterialModule
  ]
})
export class ItemGroupMasterModule { }
