import { Component, OnInit } from '@angular/core';
import {MatDialogRef} from '@angular/material/dialog';

@Component({
  selector: 'app-empedit',
  templateUrl: './empedit.component.html',
  styleUrls: ['./empedit.component.css']
})
export class EmpeditComponent implements OnInit {

  constructor(private matDialogRef:MatDialogRef<EmpeditComponent>) { }

  ngOnInit(): void {
  }
  onCloseClick(){
    this.matDialogRef.close();
  }
}
