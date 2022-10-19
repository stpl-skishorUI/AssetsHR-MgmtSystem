import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ItemParamterMasterRoutingModule } from './item-paramter-master-routing.module';
import { ItemParamterMasterComponent } from './item-paramter-master.component';
import {MaterialModule} from 'src/app/shared/angularMaterialModule/material.module';

@NgModule({
  declarations: [
    ItemParamterMasterComponent
  ],
  imports: [
    CommonModule,
    ItemParamterMasterRoutingModule,
    MaterialModule
  ]
})
export class ItemParamterMasterModule { }
