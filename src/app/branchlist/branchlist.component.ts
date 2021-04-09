import { Component,  AfterViewInit,ViewChild } from '@angular/core';
import { MatDialog} from '@angular/material/dialog';
import {BranchComponent} from '../branch/branch.component';
import {MatTableDataSource} from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';

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
  {position: 4, name: 'Indian',  contact:9934782364, email: 'ak@thepikture.com', manager: 'iyan', address: 'chennai'},
  {position: 5, name: 'Indian',  contact:9934782364, email: 'ak@thepikture.com', manager: 'iyan', address: 'chennai'},
  {position: 6, name: 'Indian',  contact:9934782364, email: 'ak@thepikture.com', manager: 'iyan', address: 'chennai'},
  {position: 7, name: 'Indian',  contact:9934782364, email: 'ak@thepikture.com', manager: 'iyan', address: 'chennai'},
  {position: 8, name: 'Indian',  contact:9934782364, email: 'ak@thepikture.com', manager: 'iyan', address: 'chennai'},
  {position: 9, name: 'Indian',  contact:9934782364, email: 'ak@thepikture.com', manager: 'iyan', address: 'chennai'},
  {position: 10, name: 'Indian',  contact:9934782364, email: 'ak@thepikture.com', manager: 'iyan', address: 'chennai'},
]
@Component({
  selector: 'app-branchlist',
  templateUrl: './branchlist.component.html',
  styleUrls: ['./branchlist.component.css']
})
export class BranchlistComponent{

  displayedColumns: string[] = ['position', 'name', 'contact', 'email', 'manager', 'address'];
  dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);

  constructor(private matDialogModule:MatDialog) { }

  onOpenDialogclick(){
    let matDialogRef = this.matDialogModule.open(BranchComponent,
      {
        width:"1700px",
        height:"600px"
      });
    matDialogRef.afterClosed();
}
@ViewChild(MatPaginator) paginator: MatPaginator;

ngAfterViewInit() {
  this.dataSource.paginator = this.paginator;
}
}