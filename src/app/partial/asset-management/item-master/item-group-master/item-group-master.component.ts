import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-item-group-master',
  templateUrl: './item-group-master.component.html',
  styleUrls: ['./item-group-master.component.css']
})
export class ItemGroupMasterComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  displayedColumns: string[] = ['srno', 'item_name', 'action'];
  dataSource = ELEMENT_DATA;
}

export interface PeriodicElement {
  srno: number;
  item_name: string;
  action: any;
}
const ELEMENT_DATA: PeriodicElement[] = [
  {srno: 1, item_name: 'Hydrogen', action: ''},
  {srno: 1, item_name: 'Hydrogen', action: ''},
  {srno: 1, item_name: 'Hydrogen', action: ''},
  {srno: 1, item_name: 'Hydrogen', action: ''},

];