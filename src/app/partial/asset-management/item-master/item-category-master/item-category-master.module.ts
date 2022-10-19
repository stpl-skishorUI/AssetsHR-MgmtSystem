import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ItemCategoryMasterRoutingModule } from './item-category-master-routing.module';
import { ItemCategoryMasterComponent } from './item-category-master.component';


@NgModule({
  declarations: [
    ItemCategoryMasterComponent
  ],
  imports: [
    CommonModule,
    ItemCategoryMasterRoutingModule
  ]
})
export class ItemCategoryMasterModule { }
