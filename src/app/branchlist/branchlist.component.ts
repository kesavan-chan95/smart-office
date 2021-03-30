import { Component, OnInit } from '@angular/core';
import { MatDialog} from '@angular/material/dialog';
import {BranchComponent} from '../branch/branch.component';

export interface PeriodicElement {
  name: string;
  position: number;
  contact:number;
  email:string;
  manager:string;
  address:string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'SBI',  contact:9934782364, email: 'ak@thepikture.com', manager: 'iyan', address: 'chennai'},
  {position: 2, name: 'HDFC',  contact:9934782364, email: 'ak@thepikture.com', manager: 'iyan', address: 'chennai'},
  {position: 3, name: 'Axis',  contact:9934782364, email: 'ak@thepikture.com', manager: 'iyan', address: 'chennai'},
  {position: 4, name: 'Indian',  contact:9934782364, email: 'ak@thepikture.com', manager: 'iyan', address: 'chennai'}
]
@Component({
  selector: 'app-branchlist',
  templateUrl: './branchlist.component.html',
  styleUrls: ['./branchlist.component.css']
})
export class BranchlistComponent{

  displayedColumns: string[] = ['position', 'name', 'contact', 'email', 'manager', 'address'];
  dataSource = ELEMENT_DATA;
  constructor(private matDialogModule:MatDialog) { }

  onOpenDialogclick(){
    let matDialogRef = this.matDialogModule.open(BranchComponent,
      {
        width:"1700px",
        height:"600px"
      });
    matDialogRef.afterClosed();
}
}