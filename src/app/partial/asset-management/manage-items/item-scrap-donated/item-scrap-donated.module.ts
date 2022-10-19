import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ItemScrapDonatedRoutingModule } from './item-scrap-donated-routing.module';
import { ItemScrapDonatedComponent } from './item-scrap-donated.component';
import {MaterialModule} from 'src/app/shared/angularMaterialModule/material.module'

@NgModule({
  declarations: [
    ItemScrapDonatedComponent
  ],
  imports: [
    CommonModule,
    ItemScrapDonatedRoutingModule,
    MaterialModule
  ]
})
export class ItemScrapDonatedModule { }
