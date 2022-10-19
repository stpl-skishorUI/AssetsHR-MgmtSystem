import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-item-paramter-master',
  templateUrl: './item-paramter-master.component.html',
  styleUrls: ['./item-paramter-master.component.css']
})
export class ItemParamterMasterComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  displayedColumns: string[] = ['srno', 'parameter_name', 'action'];
  dataSource = ELEMENT_DATA;
}
export interface PeriodicElement {
  srno: number;
  parameter_name: string;
  action: any;
}
const ELEMENT_DATA: PeriodicElement[] = [
  {srno: 1, parameter_name: 'Hydrogen', action:''},
  {srno: 1, parameter_name: 'Hydrogen', action:''},
  {srno: 1, parameter_name: 'Hydrogen', action:''},
  {srno: 1, parameter_name: 'Hydrogen', action:''},
  {srno: 1, parameter_name: 'Hydrogen', action:''},
  {srno: 1, parameter_name: 'Hydrogen', action:''},
  {srno: 1, parameter_name: 'Hydrogen', action:''},
  {srno: 1, parameter_name: 'Hydrogen', action:''},
  {srno: 1, parameter_name: 'Hydrogen', action:''},
  {srno: 1, parameter_name: 'Hydrogen', action:''},
  {srno: 1, parameter_name: 'Hydrogen', action:''},
  {srno: 1, parameter_name: 'Hydrogen', action:''},
  {srno: 1, parameter_name: 'Hydrogen', action:''},
];