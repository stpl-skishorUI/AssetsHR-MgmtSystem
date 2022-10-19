import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-store-master',
  templateUrl: './store-master.component.html',
  styleUrls: ['./store-master.component.css']
})
export class StoreMasterComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol','Action'];
  dataSource = ELEMENT_DATA;
}
const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H',Action:''},
  {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He',Action:''},
  {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li',Action:''},
  {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be',Action:''},
  {position: 5, name: 'Boron', weight: 10.811, symbol: 'B',Action:''},
  {position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C',Action:''},
  {position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N',Action:''},
  {position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O',Action:''},
  {position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F',Action:''},
  {position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne',Action:''},
  {position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C',Action:''},
  {position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N',Action:''},
  {position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O',Action:''},
  {position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F',Action:''},
  {position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne',Action:''},

];
export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
  Action:any;
}
