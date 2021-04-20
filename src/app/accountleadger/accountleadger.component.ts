import { Component, OnInit } from '@angular/core';
import {MatDialogRef} from '@angular/material/dialog';

@Component({
  selector: 'app-accountleadger',
  templateUrl: './accountleadger.component.html',
  styleUrls: ['./accountleadger.component.css']
})
export class AccountleadgerComponent implements OnInit {

  constructor(private matDialogRef:MatDialogRef<AccountleadgerComponent>) { }
  

  ngOnInit(): void {
  }
  onCloseClick(){
    this.matDialogRef.close();
  }
}
