import { Component, OnInit } from '@angular/core';
import {MatDialogRef} from '@angular/material/dialog';
import { ApiService } from '../services/api.services';
import { Router } from '@angular/router';


@Component({
  selector: 'app-business',
  templateUrl: './business.component.html',
  styleUrls: ['./business.component.css']
})
export class BusinessComponent implements OnInit {
 
  Name: string;
  Contact: string;
  AltContact: string;
  email: string;
  Website : string;
  logo: string;
  WeeklyHolyday : string;

  constructor(private matDialogRef:MatDialogRef<BusinessComponent>,
    private serivce:ApiService,
    private routes:Router) { }

  ngOnInit(): void {
  }

  addbus(){
    let data = {
      Bname:this.Name,
      AddId:1,
      Bphone1:this.Contact,
      Bphone2:this.AltContact,
      Bemail:this.email,
      Bwebsite:this.Website,
      Blogo:this.logo,
      BweeklyHolyday:this.WeeklyHolyday,
      budType: "I"
    }
    console.log(data)
    this.serivce.addbus(data).subscribe(res=>{
      console.log(res)
      this.routes.navigateByUrl('/emplist')
      this.matDialogRef.close();
    })
  }

  onCloseClick(){
    this.matDialogRef.close();
  }
}
