import { Component, AfterViewInit, ViewChild } from '@angular/core';
import {MatTableModule} from '@angular/material/table';
import { MatDialog} from '@angular/material/dialog';
import {DepartmentComponent} from '../department/department.component';
import {MatTableDataSource} from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { ApiService } from '../services/api.services';

export interface PeriodicElement {
  bid:number;
  clLovtype: string;
  
}
const ELEMENT_DATA: PeriodicElement[] = [
  ]
@Component({
  selector: 'app-deptlist',
  templateUrl: './deptlist.component.html',
  styleUrls: ['./deptlist.component.css']
})
export class DeptlistComponent {

displayedColumns: string[] = ['code', 'department'];
dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);

  constructor(private matDialogModule:MatDialog,
    private serivce:ApiService) { }
    ngOnInit(): void {
      this.serivce.getdept().subscribe((data: any[])=>{
        console.log(data);
        this.dataSource.data = data;
      })
     }

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
