import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ItemCategoryMasterRoutingModule } from './item-category-master-routing.module';
import { ItemCategoryMasterComponent } from './item-category-master.component';
import { MaterialModule } from 'src/app/shared/angularMaterialModule/material.module';
@NgModule({
  declarations: [
    ItemCategoryMasterComponent
  ],
  imports: [
    CommonModule,
    ItemCategoryMasterRoutingModule,
    MaterialModule
  ]
})
export class ItemCategoryMasterModule { }
