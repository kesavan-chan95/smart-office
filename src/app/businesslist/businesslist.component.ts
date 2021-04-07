import { Component, OnInit } from '@angular/core';
import { MatDialog} from '@angular/material/dialog';
import {BusinessComponent} from '../business/business.component';
import { ApiService } from '../services/api.services';


@Component({
  selector: 'app-businesslist',
  templateUrl: './businesslist.component.html',
  styleUrls: ['./businesslist.component.css']
})
export class BusinesslistComponent implements OnInit  {

  displayedColumns: string[] = ['bid', 'bname', 'bemail','bphone1', 'bwebsite'];
  dataSource : any[] = [];
  constructor(private matDialogModule:MatDialog,
    private serivce:ApiService) { }
    ngOnInit(): void {
      this.serivce.getbus().subscribe((data: any[])=>{
        console.log(data);
        this.dataSource = data;
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
}
