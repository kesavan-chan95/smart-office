import { Component, OnInit } from '@angular/core';
import {MatDialogRef} from '@angular/material/dialog';

interface branch {
  value: string;
  viewValue: string;
}
@Component({
  selector: 'app-branch',
  templateUrl: './branch.component.html',
  styleUrls: ['./branch.component.css']
})
export class BranchComponent implements OnInit {
  foods: branch[] = [
    {value: 'demo1', viewValue: 'demo1'},
    {value: 'demo2', viewValue: 'demo2'},
    {value: 'demo3', viewValue: 'demo3'}
  ];
  constructor(private matDialogRef:MatDialogRef<BranchComponent>) { }

  ngOnInit(): void {
  }
  onCloseClick(){
    this.matDialogRef.close();
  }
}
