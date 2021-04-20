import { Component, AfterViewInit,ViewChild,OnInit } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
//import {MatTableDataSource} from '@angular/material/table';
import { MatDialog} from '@angular/material/dialog';
import {EmpComponent} from '../emp/emp.component';
import { ApiService } from '../services/api.services';
import {MatTableDataSource} from '@angular/material/table';
import {EmpeditComponent} from '../empedit/empedit.component';

@Component({
  selector: 'app-emplist',
  templateUrl: './emplist.component.html',
  styleUrls: ['./emplist.component.css']
})
export class EmplistComponent implements OnInit  {
  displayedColumns: string[] = ['empId', 'empName', 'empEmail','empContactNo', 'empBankName', 'actions'];
  dataSource = new MatTableDataSource<any>(ELEMENT_DATA);

  constructor(private matDialogModule:MatDialog,
    private serivce:ApiService) { }
    ngOnInit(): void {
      this.serivce.getemp().subscribe((data: any[])=>{
        console.log(data);
        this.dataSource.data = data;
      })
     }

     onDelete(row){
      let data = {
        empID: this.dataSource,
        cudType:"D"
      }
      console.log(row);
      this.serivce.deleteemp(data).subscribe(res=>{
        console.log(res)
      })
     }
  onOpenDialogclick(){
    let matDialogRef = this.matDialogModule.open(EmpComponent,
      {
        width:"1700px",
        height:"600px"
      });
    matDialogRef.afterClosed();
  }
  onOpeneditclick(){
    let matDialogRef = this.matDialogModule.open(EmpeditComponent,
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
  
export interface Data {
  empId: number;
  empName: string;
  empEmail: string;
  empContactNo: number;
  empBankName: string;
}

const ELEMENT_DATA: Data[] = [
];

