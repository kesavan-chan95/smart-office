import { Component, OnInit } from '@angular/core';
import { MatDialog} from '@angular/material/dialog';
import {BusinessComponent} from '../business/business.component';

export interface PeriodicElement {
  name: string;
  position: number;
  phone:number;
  email:string;
  website:string;
  address:string;

}
const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'Iyan',  phone:9934782364, email: 'ak@thepikture.com', website: 'amazon', address: 'chennai'},
  {position: 2, name: 'Iyan',  phone:9934782364, email: 'ak@thepikture.com', website: 'amazon', address: 'chennai'},
  {position: 3, name: 'Iyan',  phone:9934782364, email: 'ak@thepikture.com', website: 'amazon', address: 'chennai'},
  {position: 4, name: 'Iyan',  phone:9934782364, email: 'ak@thepikture.com', website: 'amazon', address: 'chennai'}
]
@Component({
  selector: 'app-businesslist',
  templateUrl: './businesslist.component.html',
  styleUrls: ['./businesslist.component.css']
})
export class BusinesslistComponent {

  displayedColumns: string[] = ['position', 'name', 'phone', 'email', 'website', 'address'];
  dataSource = ELEMENT_DATA;
  constructor(private matDialogModule:MatDialog) { }

  onOpenDialogclick(){
    let matDialogRef = this.matDialogModule.open(BusinessComponent,
      {
        width:"1700px",
        height:"600px"
      });
    matDialogRef.afterClosed();
  }
}
