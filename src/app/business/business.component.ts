import { Component, OnInit } from '@angular/core';
import {MatDialogRef} from '@angular/material/dialog';

interface business {
  value: string;
  viewValue: string;
}
@Component({
  selector: 'app-business',
  templateUrl: './business.component.html',
  styleUrls: ['./business.component.css']
})
export class BusinessComponent implements OnInit {
  foods: business[] = [
    {value: 'demo1', viewValue: 'demo1'},
    {value: 'demo2', viewValue: 'demo2'},
    {value: 'demo3', viewValue: 'demo3'}
  ];
  constructor(private matDialogRef:MatDialogRef<BusinessComponent>) { }

  ngOnInit(): void {
  }
  onCloseClick(){
    this.matDialogRef.close();
  }
}
