import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-item-scrap-donated',
  templateUrl: './item-scrap-donated.component.html',
  styleUrls: ['./item-scrap-donated.component.css']
})
export class ItemScrapDonatedComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  displayedColumns: string[] = ['srno', 'item_name', 'item_id', 'vendor_name','purchase_date','disposal_method','action'];
  dataSource = ELEMENT_DATA;
}
export interface PeriodicElement {
  srno: number;
  item_name: string;
  item_id: number;
  vendor_name: string;
  purchase_date: string;
  disposal_method: string;
  action: any;
}
const ELEMENT_DATA: PeriodicElement[] = [
  {srno: 1, item_name: 'Hydrogen', item_id: 79, vendor_name: 'H Enterpise',purchase_date:'24/5/2022',disposal_method:'scrap',action:''},
  {srno: 2, item_name: 'Hydrogen', item_id: 79, vendor_name: 'H Enterpise',purchase_date:'24/5/2022',disposal_method:'scrap',action:''},
  {srno: 3, item_name: 'Hydrogen', item_id: 79, vendor_name: 'H Enterpise',purchase_date:'24/5/2022',disposal_method:'scrap',action:''},
];
