import { Component, OnInit } from '@angular/core';
import {animate, state, style, transition, trigger} from '@angular/animations';

@Component({
  selector: 'app-item-registration',
  templateUrl: './item-registration.component.html',
  styleUrls: ['./item-registration.component.css'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({height: '0px', minHeight: '0'})),
      state('expanded', style({height: '*'})),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ],
})

export class ItemRegistrationComponent implements OnInit {
  displayedColumns: string[] = ['position', 'name', 'ItemID', 'ItemCategory','ItemGroup','ItemParameter','StoreName','VendorName','Action',];
  dataSource = ELEMENT_DATA;

  constructor() { }
  ngOnInit(): void {
  }
}

export interface PeriodicElement {
  position: number;
  name: string;
  ItemID: any;
  ItemCategory: string;
  ItemGroup:any;
  ItemParameter:any;
  StoreName:any;
  VendorName:any;
  Action:any;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'Hydrogen', ItemID: 1.0079, ItemCategory: 'H',ItemGroup:'hello',ItemParameter:'hello',StoreName:'hello',VendorName:'hello',Action:''},
  {position: 1, name: 'Hydrogen', ItemID: 1.0079, ItemCategory: 'H',ItemGroup:'hello',ItemParameter:'hello',StoreName:'hello',VendorName:'hello',Action:''},
  {position: 1, name: 'Hydrogen', ItemID: 1.0079, ItemCategory: 'H',ItemGroup:'hello',ItemParameter:'hello',StoreName:'hello',VendorName:'hello',Action:''},
  {position: 1, name: 'Hydrogen', ItemID: 1.0079, ItemCategory: 'H',ItemGroup:'hello',ItemParameter:'hello',StoreName:'hello',VendorName:'hello',Action:''},
  {position: 1, name: 'Hydrogen', ItemID: 1.0079, ItemCategory: 'H',ItemGroup:'hello',ItemParameter:'hello',StoreName:'hello',VendorName:'hello',Action:''},
  {position: 1, name: 'Hydrogen', ItemID: 1.0079, ItemCategory: 'H',ItemGroup:'hello',ItemParameter:'hello',StoreName:'hello',VendorName:'hello',Action:''},
  {position: 1, name: 'Hydrogen', ItemID: 1.0079, ItemCategory: 'H',ItemGroup:'hello',ItemParameter:'hello',StoreName:'hello',VendorName:'hello',Action:''},
  {position: 1, name: 'Hydrogen', ItemID: 1.0079, ItemCategory: 'H',ItemGroup:'hello',ItemParameter:'hello',StoreName:'hello',VendorName:'hello',Action:''},
  {position: 1, name: 'Hydrogen', ItemID: 1.0079, ItemCategory: 'H',ItemGroup:'hello',ItemParameter:'hello',StoreName:'hello',VendorName:'hello',Action:''},
  {position: 1, name: 'Hydrogen', ItemID: 1.0079, ItemCategory: 'H',ItemGroup:'hello',ItemParameter:'hello',StoreName:'hello',VendorName:'hello',Action:''},
  {position: 1, name: 'Hydrogen', ItemID: 1.0079, ItemCategory: 'H',ItemGroup:'hello',ItemParameter:'hello',StoreName:'hello',VendorName:'hello',Action:''},
  {position: 1, name: 'Hydrogen', ItemID: 1.0079, ItemCategory: 'H',ItemGroup:'hello',ItemParameter:'hello',StoreName:'hello',VendorName:'hello',Action:''},
  {position: 1, name: 'Hydrogen', ItemID: 1.0079, ItemCategory: 'H',ItemGroup:'hello',ItemParameter:'hello',StoreName:'hello',VendorName:'hello',Action:''},
  {position: 1, name: 'Hydrogen', ItemID: 1.0079, ItemCategory: 'H',ItemGroup:'hello',ItemParameter:'hello',StoreName:'hello',VendorName:'hello',Action:''},
  {position: 1, name: 'Hydrogen', ItemID: 1.0079, ItemCategory: 'H',ItemGroup:'hello',ItemParameter:'hello',StoreName:'hello',VendorName:'hello',Action:''},
  {position: 1, name: 'Hydrogen', ItemID: 1.0079, ItemCategory: 'H',ItemGroup:'hello',ItemParameter:'hello',StoreName:'hello',VendorName:'hello',Action:''},
  {position: 1, name: 'Hydrogen', ItemID: 1.0079, ItemCategory: 'H',ItemGroup:'hello',ItemParameter:'hello',StoreName:'hello',VendorName:'hello',Action:''},
  {position: 1, name: 'Hydrogen', ItemID: 1.0079, ItemCategory: 'H',ItemGroup:'hello',ItemParameter:'hello',StoreName:'hello',VendorName:'hello',Action:''},
  {position: 1, name: 'Hydrogen', ItemID: 1.0079, ItemCategory: 'H',ItemGroup:'hello',ItemParameter:'hello',StoreName:'hello',VendorName:'hello',Action:''},
  {position: 1, name: 'Hydrogen', ItemID: 1.0079, ItemCategory: 'H',ItemGroup:'hello',ItemParameter:'hello',StoreName:'hello',VendorName:'hello',Action:''},
];
