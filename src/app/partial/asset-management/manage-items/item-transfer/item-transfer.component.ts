import { Component, OnInit } from '@angular/core';
import {animate, state, style, transition, trigger} from '@angular/animations';


@Component({
  selector: 'app-item-transfer',
  templateUrl: './item-transfer.component.html',
  styleUrls: ['./item-transfer.component.css'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({height: '0px', minHeight: '0'})),
      state('expanded', style({height: '*'})),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ],
})
export class ItemTransferComponent implements OnInit {
  displayedColumns: string[] = ['position', 'name', 'ItemID', 'ItemCategory','OldStore','NewStore','TransferDate','TransferApp','Action',];
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
  OldStore:any;
  NewStore:any;
  TransferDate:any;
  TransferApp:any;
  Action:any;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'Hydrogen', ItemID: 1.0079, ItemCategory: 'H',OldStore:'hello',NewStore:'hello',TransferDate:'hello',TransferApp:'hello',Action:''},
  {position: 1, name: 'Hydrogen', ItemID: 1.0079, ItemCategory: 'H',OldStore:'hello',NewStore:'hello',TransferDate:'hello',TransferApp:'hello',Action:''},
  {position: 1, name: 'Hydrogen', ItemID: 1.0079, ItemCategory: 'H',OldStore:'hello',NewStore:'hello',TransferDate:'hello',TransferApp:'hello',Action:''},
  {position: 1, name: 'Hydrogen', ItemID: 1.0079, ItemCategory: 'H',OldStore:'hello',NewStore:'hello',TransferDate:'hello',TransferApp:'hello',Action:''},
  {position: 1, name: 'Hydrogen', ItemID: 1.0079, ItemCategory: 'H',OldStore:'hello',NewStore:'hello',TransferDate:'hello',TransferApp:'hello',Action:''},
  {position: 1, name: 'Hydrogen', ItemID: 1.0079, ItemCategory: 'H',OldStore:'hello',NewStore:'hello',TransferDate:'hello',TransferApp:'hello',Action:''},
  {position: 1, name: 'Hydrogen', ItemID: 1.0079, ItemCategory: 'H',OldStore:'hello',NewStore:'hello',TransferDate:'hello',TransferApp:'hello',Action:''},
  {position: 1, name: 'Hydrogen', ItemID: 1.0079, ItemCategory: 'H',OldStore:'hello',NewStore:'hello',TransferDate:'hello',TransferApp:'hello',Action:''},
  {position: 1, name: 'Hydrogen', ItemID: 1.0079, ItemCategory: 'H',OldStore:'hello',NewStore:'hello',TransferDate:'hello',TransferApp:'hello',Action:''},
  {position: 1, name: 'Hydrogen', ItemID: 1.0079, ItemCategory: 'H',OldStore:'hello',NewStore:'hello',TransferDate:'hello',TransferApp:'hello',Action:''},
  {position: 1, name: 'Hydrogen', ItemID: 1.0079, ItemCategory: 'H',OldStore:'hello',NewStore:'hello',TransferDate:'hello',TransferApp:'hello',Action:''},
  {position: 1, name: 'Hydrogen', ItemID: 1.0079, ItemCategory: 'H',OldStore:'hello',NewStore:'hello',TransferDate:'hello',TransferApp:'hello',Action:''},
  {position: 1, name: 'Hydrogen', ItemID: 1.0079, ItemCategory: 'H',OldStore:'hello',NewStore:'hello',TransferDate:'hello',TransferApp:'hello',Action:''},
  {position: 1, name: 'Hydrogen', ItemID: 1.0079, ItemCategory: 'H',OldStore:'hello',NewStore:'hello',TransferDate:'hello',TransferApp:'hello',Action:''},
  {position: 1, name: 'Hydrogen', ItemID: 1.0079, ItemCategory: 'H',OldStore:'hello',NewStore:'hello',TransferDate:'hello',TransferApp:'hello',Action:''},
  {position: 1, name: 'Hydrogen', ItemID: 1.0079, ItemCategory: 'H',OldStore:'hello',NewStore:'hello',TransferDate:'hello',TransferApp:'hello',Action:''},
  {position: 1, name: 'Hydrogen', ItemID: 1.0079, ItemCategory: 'H',OldStore:'hello',NewStore:'hello',TransferDate:'hello',TransferApp:'hello',Action:''},
  
 
];
