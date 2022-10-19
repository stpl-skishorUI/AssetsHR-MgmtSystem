import { Component, OnInit } from '@angular/core';
import {animate, state, style, transition, trigger} from '@angular/animations';

@Component({
  selector: 'app-item-issue-return',
  templateUrl: './item-issue-return.component.html',
  styleUrls: ['./item-issue-return.component.css'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({height: '0px', minHeight: '0'})),
      state('expanded', style({height: '*'})),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ],
})
export class ItemIssueReturnComponent implements OnInit {
  displayedColumns: string[] = ['position', 'name', 'ItemID', 'EmployeeName','IssueDate','ReturnDate','Action',];
  dataSource = ELEMENT_DATA;


  constructor() { }

  ngOnInit(): void {
  }

}

export interface PeriodicElement {
  position: number;
  name: string;
  ItemID: any;
  EmployeeName: string;
  IssueDate:any;
  ReturnDate:any;
  Action:any;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'Hydrogen', ItemID: 1.0079, EmployeeName: 'H',IssueDate:'hello',ReturnDate:'hello',Action:''},
  {position: 2, name: 'Hydrogen', ItemID: 1.0079, EmployeeName: 'H',IssueDate:'hello',ReturnDate:'hello',Action:''},
  {position: 3, name: 'Hydrogen', ItemID: 1.0079, EmployeeName: 'H',IssueDate:'hello',ReturnDate:'hello',Action:''},
  {position: 4, name: 'Hydrogen', ItemID: 1.0079, EmployeeName: 'H',IssueDate:'hello',ReturnDate:'hello',Action:''},
  {position: 5, name: 'Hydrogen', ItemID: 1.0079, EmployeeName: 'H',IssueDate:'hello',ReturnDate:'hello',Action:''},
  {position: 6, name: 'Hydrogen', ItemID: 1.0079, EmployeeName: 'H',IssueDate:'hello',ReturnDate:'hello',Action:''},
  {position: 7, name: 'Hydrogen', ItemID: 1.0079, EmployeeName: 'H',IssueDate:'hello',ReturnDate:'hello',Action:''},
  {position: 8, name: 'Hydrogen', ItemID: 1.0079, EmployeeName: 'H',IssueDate:'hello',ReturnDate:'hello',Action:''},
  {position: 9, name: 'Hydrogen', ItemID: 1.0079, EmployeeName: 'H',IssueDate:'hello',ReturnDate:'hello',Action:''},
  {position: 10, name: 'Hydrogen', ItemID: 1.0079, EmployeeName: 'H',IssueDate:'hello',ReturnDate:'hello',Action:''},
  {position: 11, name: 'Hydrogen', ItemID: 1.0079, EmployeeName: 'H',IssueDate:'hello',ReturnDate:'hello',Action:''},
  {position: 12, name: 'Hydrogen', ItemID: 1.0079, EmployeeName: 'H',IssueDate:'hello',ReturnDate:'hello',Action:''},
  {position: 13, name: 'Hydrogen', ItemID: 1.0079, EmployeeName: 'H',IssueDate:'hello',ReturnDate:'hello',Action:''},
  {position: 14, name: 'Hydrogen', ItemID: 1.0079, EmployeeName: 'H',IssueDate:'hello',ReturnDate:'hello',Action:''},
  {position: 15, name: 'Hydrogen', ItemID: 1.0079, EmployeeName: 'H',IssueDate:'hello',ReturnDate:'hello',Action:''},
  {position: 16, name: 'Hydrogen', ItemID: 1.0079, EmployeeName: 'H',IssueDate:'hello',ReturnDate:'hello',Action:''},
];

