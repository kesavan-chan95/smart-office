import { Component, OnInit } from '@angular/core';
import {MatDialogRef} from '@angular/material/dialog';
import { Router } from '@angular/router';

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
  constructor(private matDialogRef:MatDialogRef<BranchComponent>,
    private routes:Router) { }

  ngOnInit(): void {
  }
  addbranch(){
    this.routes.navigateByUrl('/branchlist');
    this.matDialogRef.close();
  }
  onCloseClick(){
    this.matDialogRef.close();
  }
}
