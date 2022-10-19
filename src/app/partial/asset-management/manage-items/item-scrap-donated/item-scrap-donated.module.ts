import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ItemScrapDonatedRoutingModule } from './item-scrap-donated-routing.module';
import { ItemScrapDonatedComponent } from './item-scrap-donated.component';


@NgModule({
  declarations: [
    ItemScrapDonatedComponent
  ],
  imports: [
    CommonModule,
    ItemScrapDonatedRoutingModule
  ]
})
export class ItemScrapDonatedModule { }
