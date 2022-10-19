import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ItemParamterMasterRoutingModule } from './item-paramter-master-routing.module';
import { ItemParamterMasterComponent } from './item-paramter-master.component';


@NgModule({
  declarations: [
    ItemParamterMasterComponent
  ],
  imports: [
    CommonModule,
    ItemParamterMasterRoutingModule
  ]
})
export class ItemParamterMasterModule { }
