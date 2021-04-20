import { Component, OnInit } from '@angular/core';
import {MatDialogRef} from '@angular/material/dialog';
import { ApiService } from '../services/api.services';
import { Router } from '@angular/router';

@Component({
  selector: 'app-department',
  templateUrl: './department.component.html',
  styleUrls: ['./department.component.css']
})
export class DepartmentComponent implements OnInit {
  Name: string;
  code: number;

  constructor(private matDialogRef:MatDialogRef<DepartmentComponent>,
    private serivce:ApiService,
    private routes:Router) { }

  ngOnInit(): void {
  }
  adddept(){
    let data = {
      Bid:0,
      ClLovtype: this.Name,
      cudType: "I"
    }
    console.log(data)
    this.serivce.adddept(data).subscribe(res=>{
      console.log(res)
      this.routes.navigateByUrl('/deptlist')
      window.location.reload();
      this.matDialogRef.close();
    })
  }
  onCloseClick(){
    this.matDialogRef.close();
  }
}
