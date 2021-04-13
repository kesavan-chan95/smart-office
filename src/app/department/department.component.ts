import { Component, OnInit } from '@angular/core';
import {MatDialogRef} from '@angular/material/dialog';

@Component({
  selector: 'app-department',
  templateUrl: './department.component.html',
  styleUrls: ['./department.component.css']
})
export class DepartmentComponent implements OnInit {

  constructor(private matDialogRef:MatDialogRef<DepartmentComponent>) { }

  ngOnInit(): void {
  }
  onCloseClick(){
    this.matDialogRef.close();
  }
}
