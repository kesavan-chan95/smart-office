import { Component, OnInit,AfterViewInit,ViewChild  } from '@angular/core';
import { MatDialog} from '@angular/material/dialog';
import {BusinessComponent} from '../business/business.component';
import { ApiService } from '../services/api.services';



import {MatTableDataSource} from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';

const ELEMENT_DATA: any[] = [];

@Component({
  selector: 'app-businesslist',
  templateUrl: './businesslist.component.html',
  styleUrls: ['./businesslist.component.css']
})
export class BusinesslistComponent implements OnInit  {

  displayedColumns: string[] = ['bid', 'bname', 'bemail','bphone1', 'bwebsite'];
  dataSource = new MatTableDataSource<any>(ELEMENT_DATA);
  
  constructor(private matDialogModule:MatDialog,
    private serivce:ApiService) { }
    ngOnInit(): void {
      this.serivce.getbus().subscribe((data: any[])=>{
        console.log(data);
        this.dataSource.data= data;
      })
     }
  onOpenDialogclick(){
    let matDialogRef = this.matDialogModule.open(BusinessComponent,
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
