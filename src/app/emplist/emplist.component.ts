import { Component, AfterViewInit,ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatDialog} from '@angular/material/dialog';
import {EmpComponent} from '../emp/emp.component';

@Component({
  selector: 'app-emplist',
  templateUrl: './emplist.component.html',
  styleUrls: ['./emplist.component.css']
})
export class EmplistComponent  {
  displayedColumns: string[] = ['position', 'name', 'Department', 'Designation', 'Contact'];
  dataSource = ELEMENT_DATA;

  constructor(private matDialogModule:MatDialog) { }
  onOpenDialogclick(){
    let matDialogRef = this.matDialogModule.open(EmpComponent,
      {
        width:"1700px",
        height:"600px"
      });
    matDialogRef.afterClosed();
  }
  @ViewChild(MatPaginator) paginator: MatPaginator;

  // ngAfterViewInit() {
  //   this.dataSource.paginator = this.paginator;
  // }
}
  
export interface PeriodicElement {
  name: string;
  position: number;
  Department: string;
  Designation: string;
  Contact: number;
}

const ELEMENT_DATA: PeriodicElement[] = [
  { position: 1, name: 'Kesavan', Designation: "FUll Stack developer", Department: 'IT', Contact:8763892657 },
  { position: 2, name: 'Chandran', Designation: "Tester", Department: 'IT', Contact:9763892657 },
  { position: 3, name: 'Komathi', Designation: "Junior Tester", Department: 'IT' ,Contact:8363892657 },
  { position: 4, name: 'Yuganthi', Designation: "FUll Stack developer", Department: 'IT',Contact:8263892657 },
  { position: 5, name: 'Kokila', Designation: "Front end developer", Department: 'IT' ,Contact:7763892657},
  { position: 6, name: 'Mehtaj', Designation: "Back end developer" , Department: 'IT' ,Contact:8063892657},
  { position: 7, name: 'Sripriya', Designation: "Back end developer", Department: 'IT' ,Contact:8963892657 },
  { position: 8, name: 'Karthi', Designation: "DBA", Department: 'IT' ,Contact:8763891657},
  { position: 9, name: 'Kesu', Designation: "Front end developer", Department: 'IT' ,Contact:8763592657},
  { position: 10, name: 'Malathi', Designation: "RPA Developer", Department: 'IT' ,Contact:8763892607},
];


