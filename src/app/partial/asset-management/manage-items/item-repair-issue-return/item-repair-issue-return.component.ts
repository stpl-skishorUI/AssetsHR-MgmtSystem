import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-item-repair-issue-return',
  templateUrl: './item-repair-issue-return.component.html',
  styleUrls: ['./item-repair-issue-return.component.css']
})
export class ItemRepairIssueReturnComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol','return','Action'];
  dataSource = ELEMENT_DATA;
}
const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H',return:'16-12-2022',Action:''},
  {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He',return:'16-12-2022',Action:''},
  {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li',return:'16-12-2022',Action:''},
  {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be',return:'16-12-2022',Action:''},
  {position: 5, name: 'Boron', weight: 10.811, symbol: 'B',return:'16-12-2022',Action:''},
  {position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C',return:'16-12-2022',Action:''},
  {position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N',return:'16-12-2022',Action:''},
  {position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O',return:'16-12-2022',Action:''},
  {position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F',return:'16-12-2022',Action:''},
  {position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne',return:'16-12-2022',Action:''},
  {position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C',return:'16-12-2022',Action:''},
  {position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N',return:'16-12-2022',Action:''},
  {position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O',return:'16-12-2022',Action:''},
  {position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F',return:'16-12-2022',Action:''},
  {position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne',return:'16-12-2022',Action:''},

];
export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
  return:string;
  Action:any;
}
