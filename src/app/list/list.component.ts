import { Component, OnInit } from '@angular/core';

import { ApiService } from '../services/api.services'

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  

  lis=[]; 

  constructor(private serivce:ApiService) { }
  ngOnInit(): void {
   this.serivce.getlist().subscribe((data: any[])=>{
     console.log(data);
     this.lis = data;
   })
  }

}
