import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../services/api.services'

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {

  Name: string;
  Email: string;
  Contact : string;
  Address : string;
  
  constructor(private serivce:ApiService,
    private routes:Router) { }

  ngOnInit(): void {
  }
  customer(){
    let data = {
      name: this.Name,
      email: this.Email,
      contact: this.Contact,
      address: this.Address
    }
    console.log(data)
    this.serivce.customer(data).subscribe(res=>{
      this.routes.navigateByUrl('/cuslist')
      console.log(res)
    })
    
  }

}
