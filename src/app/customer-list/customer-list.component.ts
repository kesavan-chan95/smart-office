import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.services'

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.css']
})
export class CustomerListComponent implements OnInit {
  lis=[]; 

  constructor(private serivce:ApiService) { }
  ngOnInit(): void {
   this.serivce.getCus().subscribe((data: any[])=>{
     console.log(data);
     this.lis = data;
   })
  }
}
