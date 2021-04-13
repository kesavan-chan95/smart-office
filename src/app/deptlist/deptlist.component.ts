import { Component, AfterViewInit, ViewChild } from '@angular/core';
import {MatTableModule} from '@angular/material/table';
import { MatDialog} from '@angular/material/dialog';
import {DepartmentComponent} from '../department/department.component';
import {MatTableDataSource} from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';

export interface PeriodicElement {
  code: number;
  department: string;
  
}
const ELEMENT_DATA: PeriodicElement[] = [
  {code: 1, department:'MCA'},
  {code: 2, department:'MBA'},
  {code: 3, department:'CS'},
  {code: 4, department:'CA'},
  {code: 5, department:'BA'},
  {code: 6, department:'EEE'},
  ]
@Component({
  selector: 'app-deptlist',
  templateUrl: './deptlist.component.html',
  styleUrls: ['./deptlist.component.css']
})
export class DeptlistComponent {

displayedColumns: string[] = ['code', 'department'];
dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);

  constructor(private matDialogModule:MatDialog) { }

  // constructor(public dialog: MatDialog) { }
  onOpenDialogclick(){
   let matDialogRef = this.matDialogModule.open(DepartmentComponent);
   matDialogRef.afterClosed();
  }
  @ViewChild(MatPaginator) paginator: MatPaginator;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }
}
