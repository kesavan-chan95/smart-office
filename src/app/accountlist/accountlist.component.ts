import { Component,  AfterViewInit,ViewChild } from '@angular/core';
import { MatDialog} from '@angular/material/dialog';
import {MatTableDataSource} from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { AccountleadgerComponent } from '../accountleadger/accountleadger.component';

export interface PeriodicElement {
  code: number;
  leadgername: string;
  area:string;
}
const ELEMENT_DATA: PeriodicElement[] = [
  {code: 1, leadgername: 'kumar',  area:"chennai"},
  {code: 2, leadgername: 'kumar',  area:"chennai"},
  {code: 3, leadgername: 'kumar',  area:"chennai"},
]
@Component({
  selector: 'app-accountlist',
  templateUrl: './accountlist.component.html',
  styleUrls: ['./accountlist.component.css']
})
export class AccountlistComponent {
  displayedColumns: string[] = ['code', 'leadgername', 'area'];
  dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);

constructor(private matDialogModule:MatDialog) { }

onOpenDialogclick(){
  let matDialogRef = this.matDialogModule.open(AccountleadgerComponent);
}
@ViewChild(MatPaginator) paginator: MatPaginator;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }
  
}
